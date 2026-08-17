import { Handler } from '@netlify/functions';
import { randomBytes } from 'crypto';

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
    // Generate cryptographically secure random reference code
    // 8 bytes = 64 bits of entropy = 1.8 × 10^19 possible combinations
    const randomBytes_result = randomBytes(8);
    const hexCode = randomBytes_result.toString('hex').toUpperCase();
    const refCode = `GRL-${hexCode}`;

    // Log reference code generation (for audit trail in your system)
    console.log(`Reference code generated: ${refCode}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ refCode }),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff'
      }
    };
  } catch (error) {
    console.error('Error generating reference code:', error);
    return {
      statusCode: 503,
      body: JSON.stringify({ error: 'Service unavailable' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};

export { handler };
