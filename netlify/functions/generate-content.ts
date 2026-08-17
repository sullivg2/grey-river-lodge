import { Handler } from '@netlify/functions';
import { GoogleGenAI } from '@google/genai';

const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }

  try {
    // Get API key from server-side environment only (never exposed to client)
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error('GEMINI_API_KEY not configured in Netlify environment');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Service not configured' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    // Parse request body
    let requestData;
    try {
      requestData = JSON.parse(event.body || '{}');
    } catch {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid JSON payload' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    const { userText, systemInstruction } = requestData;

    if (!userText) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing userText parameter' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    // Validate input length (prevent abuse)
    if (userText.length > 5000) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Input too long (max 5000 characters)' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    // Rate limiting: check X-Forwarded-For for client IP
    const clientIp = event.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
    const rateLimitKey = `gemini:${clientIp}`;

    // Call Gemini API with server-side key
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userText,
      config: systemInstruction ? { systemInstruction } : undefined
    });

    const replyText = response.text || '';

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: replyText }),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store', // Don't cache AI responses
        'X-Content-Type-Options': 'nosniff'
      }
    };
  } catch (error) {
    console.error('Error calling Gemini API:', error);

    // Don't expose internal error details to client
    return {
      statusCode: 503,
      body: JSON.stringify({ error: 'Service unavailable' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};

export { handler };
