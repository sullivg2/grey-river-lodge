import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, ExternalLink, Linkedin, Compass, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const AiGuideChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: 'Grey River Outfitter Mission Control online. How can I assist you with river pool logistics, 2027 booking availability, or our off-grid infrastructure?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const systemInstruction = `You are the Grey River Outfitter & Sales Engineer concierge for Grey River Lodge in Newfoundland.
PERSONALITY:
- Technical yet business-centric (Sales Engineer mindset).
- Transparent, professional, and slightly "mission-control" in tone.
- When describing technical wins or infrastructure (such as SIEM, 5G, 200-amp power, Starlink, solar arrays), always tie them back to revenue growth or operational efficiency.

KEY PILLARS TO HIGHLIGHT:
1. ENTREPRENEURIAL DNA: Mention being the CEO of Cloud Brewery and a first-hire equity partner at Cloud-A. Geoff knows how to build from zero.
2. TECHNICAL ARCHITECTURE: Deep expertise in Cybersecurity (Arctic Wolf), Cloud (AWS/OpenStack), and 5G (Bell Canada).
3. SALES DISCIPLINE: Formal training in MEDDIC and Xerox methodologies. He doesn't just "tech"—he closes.

CONSTRAINTS:
- Keep responses strictly under 3 sentences unless asked for an explicit deep dive.
- If asked about contact info, point them directly to the LinkedIn button in the UI or info@greyriverlodge.com.
- Do not make up experience. If something isn't in the context, focus on adaptability and core competencies.`;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setIsLoading(true);

    try {
      // Try using Google GenAI SDK if key is available in environment
      // @ts-ignore
      const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY || '';
      let replyText = '';

      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: userText,
          config: {
            systemInstruction
          }
        });
        replyText = response.text || '';
      }

      if (!replyText) {
        // High quality deterministic fallback matching the exact constraints
        const lower = userText.toLowerCase();
        if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) {
          replyText = "For direct contact and professional networking, please utilize the LinkedIn button situated right on the interface. You can also reach our outfitter headquarters directly at info@greyriverlodge.com.";
        } else if (lower.includes('background') || lower.includes('experience') || lower.includes('who') || lower.includes('geoff')) {
          replyText = "Backed by entrepreneurial DNA as CEO of Cloud Brewery and first-hire equity partner at Cloud-A, this operation combines deep technical architecture with MEDDIC sales discipline. We execute high-value projects with mission-control precision to maximize operational return.";
        } else if (lower.includes('rates') || lower.includes('price') || lower.includes('cost') || lower.includes('booking')) {
          replyText = "Our 2027 6-Day/7-Night all-inclusive packages range from $6,250 to $6,850 CAD per rod, with full private lodge buyouts at $48,000 CAD. Head to the Rates tab to calculate group economics or reserve your targeted pool dates.";
        } else if (lower.includes('power') || lower.includes('generator') || lower.includes('wifi') || lower.includes('solar')) {
          replyText = "The compound operates on continuous 200-amp power backed by dual Yanmar diesel and Honda EU3000 generators alongside a 2-panel solar battery system and Starlink. This delivers zero-downtime operations and enterprise-grade reliability in roadless wilderness.";
        } else {
          replyText = "Grey River Lodge provides roadless fjord access to pristine Atlantic salmon holding pools with strict MEDDIC-level rigor in expedition outfitting. Let me know your target season window (June, July, or August) and party size to lock down prime water.";
        }
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: replyText.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: "Grey River operates unpressured wilderness pools with rigorous MEDDIC-level discipline. For direct inquiries, check our Rates and Booking tab or reach out via LinkedIn.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#11191F] hover:bg-[#1B2A32] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl border border-[#D97746] flex items-center gap-2 cursor-pointer transition-all hover:scale-105 group"
          aria-label="Open Outfitter AI Concierge"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-[#D97746]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#11191F]"></span>
          </div>
          <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
            Outfitter AI Concierge
          </span>
        </button>
      )}

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="bg-[#11191F] text-[#F5F2EB] w-[90vw] sm:w-[380px] h-[520px] rounded-2xl shadow-2xl border border-[#263B46] flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Chat Header */}
          <div className="p-4 bg-[#0B1014] border-b border-[#263B46] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#263B46]/50 text-[#D97746]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span>Mission Control Concierge</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                </h4>
                <p className="text-[10px] text-[#F5F2EB]/60">Sales Engineer & Outfitting Mindset</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-[#F5F2EB]/70 hover:text-[#D97746] transition"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#F5F2EB]/60 hover:text-white rounded hover:bg-[#1B2A32] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#11191F] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#263B46] text-[#D97746] flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3 rounded-xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#D97746] text-white rounded-br-none'
                      : 'bg-[#1B2A32] text-[#F5F2EB] border border-[#263B46] rounded-bl-none shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-[9px] opacity-50 block text-right mt-1 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2 items-center text-[#F5F2EB]/60 text-xs italic">
                <Compass className="w-4 h-4 animate-spin text-[#D97746]" />
                <span>Computing tactical river response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-[#0B1014]/60 border-t border-[#263B46] flex gap-1.5 overflow-x-auto text-[10px]">
            <button
              onClick={() => setInput("What's included in the 2027 package?")}
              className="whitespace-nowrap px-2.5 py-1 rounded bg-[#1B2A32] text-[#F5F2EB]/80 hover:text-white border border-[#263B46] transition"
            >
              Package Inclusions?
            </button>
            <button
              onClick={() => setInput("How is the off-grid power architected?")}
              className="whitespace-nowrap px-2.5 py-1 rounded bg-[#1B2A32] text-[#F5F2EB]/80 hover:text-white border border-[#263B46] transition"
            >
              Off-Grid Power?
            </button>
            <button
              onClick={() => setInput("How do I contact Geoff on LinkedIn?")}
              className="whitespace-nowrap px-2.5 py-1 rounded bg-[#1B2A32] text-[#D97746] hover:text-white border border-[#263B46] transition flex items-center gap-1"
            >
              <Linkedin className="w-2.5 h-2.5" /> LinkedIn Contact
            </button>
          </div>

          {/* Input Box */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#0B1014] border-t border-[#263B46] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pools, logistics, or outfitting..."
              className="flex-1 bg-[#1B2A32] text-white text-xs px-3 py-2.5 rounded-lg border border-[#263B46] focus:outline-none focus:border-[#D97746] placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-[#D97746] hover:bg-[#C26334] disabled:opacity-50 text-white p-2.5 rounded-lg transition cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
};
