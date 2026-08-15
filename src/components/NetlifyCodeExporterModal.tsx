import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Folder, ExternalLink, Download, Sparkles } from 'lucide-react';

interface NetlifyCodeExporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CodeFile {
  path: string;
  language: string;
  content: string;
}

export const NetlifyCodeExporterModal: React.FC<NetlifyCodeExporterModalProps> = ({ isOpen, onClose }) => {
  const [selectedFileIndex, setSelectedFileIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const files: CodeFile[] = [
    {
      path: 'package.json',
      language: 'json',
      content: `{
  "name": "grey-river-lodge",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/tailwind": "^5.1.0",
    "astro": "^4.15.0",
    "lucide-astro": "^0.435.0",
    "tailwindcss": "^3.4.10"
  }
}`
    },
    {
      path: 'astro.config.mjs',
      language: 'javascript',
      content: `import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://greyriverlodge.com',
  integrations: [tailwind()],
  output: 'static'
});`
    },
    {
      path: 'tailwind.config.mjs',
      language: 'javascript',
      content: `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#11191F',
          800: '#1B2A32',
          700: '#263B46'
        },
        forest: {
          DEFAULT: '#2D4A3E',
          dark: '#1F342B',
          light: '#3E6656'
        },
        ochre: {
          DEFAULT: '#D97746',
          hover: '#C26334'
        },
        birch: '#F5F2EB'
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};`
    },
    {
      path: 'public/_redirects',
      language: 'plaintext',
      content: `# Netlify SPA / 404 fallback handling
/*    /index.html   200`
    },
    {
      path: 'src/layouts/Layout.astro',
      language: 'astro',
      content: `---
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
}

const { 
  title, 
  description = "Experience world-class Atlantic salmon fly fishing at Grey River Lodge on Newfoundland's rugged south coast." 
} = Astro.props;
---

<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title} | Grey River Lodge</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={\`\${title} | Grey River Lodge\`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </head>
  <body class="flex min-h-screen flex-col">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </body>
</html>`
    },
    {
      path: 'src/pages/contact.astro',
      language: 'astro',
      content: `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Book Your Trip | Inquiries">
  <section class="py-20 bg-birch">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      
      <div class="text-center space-y-3 mb-12">
        <span class="text-xs uppercase tracking-widest text-ochre font-bold">Reservations & Inquiries</span>
        <h1 class="text-4xl font-serif">Plan Your Grey River Trip</h1>
        <p class="text-slate-600 text-sm max-w-lg mx-auto">
          Fill out the details below and our outfitter team will get back to you with open dates, customized itineraries, and group quotes.
        </p>
      </div>

      <!-- Netlify Serverless Form -->
      <form 
        name="lodge-inquiry" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        class="bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-slate-200 space-y-6"
      >
        <!-- Honeypot anti-spam -->
        <input type="hidden" name="form-name" value="lodge-inquiry" />
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
            <input 
              type="text" 
              name="name" 
              required 
              class="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-forest focus:outline-none text-sm" 
              placeholder="John Doe"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
            <input 
              type="email" 
              name="email" 
              required 
              class="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-forest focus:outline-none text-sm" 
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              class="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-forest focus:outline-none text-sm" 
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Party Size</label>
            <select 
              name="party-size" 
              class="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-forest focus:outline-none text-sm bg-white"
            >
              <option value="1-2">1 - 2 Anglers</option>
              <option value="3-4">3 - 4 Anglers</option>
              <option value="5-8">5 - 8 Anglers</option>
              <option value="buyout">Full Lodge Buyout (Private Group)</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Target Season</label>
            <select 
              name="season-window" 
              class="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-forest focus:outline-none text-sm bg-white"
            >
              <option value="june-early">Late June (Fresh Run Starts)</option>
              <option value="july-peak">July (Peak Dry Fly Action)</option>
              <option value="aug-late">August (Late Salmon & Sea Trout)</option>
              <option value="flexible">Flexible / Any Available</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Angling Experience</label>
            <select 
              name="experience" 
              class="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-forest focus:outline-none text-sm bg-white"
            >
              <option value="beginner">Beginner / New to Salmon</option>
              <option value="intermediate">Intermediate Single-Hand</option>
              <option value="advanced">Experienced Spey / Atlantic Angler</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">Notes or Special Requirements</label>
          <textarea 
            name="notes" 
            rows="4" 
            class="w-full px-4 py-3 border border-slate-300 rounded focus:ring-2 focus:ring-forest focus:outline-none text-sm" 
            placeholder="Tell us about your trip goals, dietary restrictions, or private charter preferences..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full bg-ochre hover:bg-ochre-hover text-white text-sm font-semibold uppercase tracking-wider py-4 rounded transition duration-200"
        >
          Submit Booking Inquiry
        </button>

      </form>
    </div>
  </section>
</Layout>`
    }
  ];

  const activeFile = files[selectedFileIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#11191F] text-[#F5F2EB] w-full max-w-5xl rounded-xl shadow-2xl border border-[#263B46] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-[#263B46] flex justify-between items-center bg-[#0B1014]">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-5 h-5 text-[#D97746]" />
            <div>
              <h3 className="text-lg font-bold text-white">
                Astro + Tailwind + Netlify Source Code Files
              </h3>
              <p className="text-xs text-[#F5F2EB]/60">
                Ready for one-click static deployment to Netlify or Astro SSG
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F5F2EB]/60 hover:text-white rounded-lg hover:bg-[#1B2A32] transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body Split View */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-grow overflow-hidden">
          
          {/* File Explorer Sidebar */}
          <div className="md:col-span-4 bg-[#1B2A32] border-r border-[#263B46] p-4 overflow-y-auto space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3 px-2">
              Project Structure
            </span>

            {files.map((file, idx) => (
              <button
                key={file.path}
                onClick={() => {
                  setSelectedFileIndex(idx);
                  setCopied(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition flex items-center gap-2 cursor-pointer ${
                  selectedFileIndex === idx
                    ? 'bg-[#2D4A3E] text-white font-semibold shadow'
                    : 'text-[#F5F2EB]/70 hover:bg-[#263B46] hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-[#D97746] shrink-0" />
                <span className="truncate">{file.path}</span>
              </button>
            ))}

            <div className="pt-6 mt-6 border-t border-[#263B46]/80 px-2 space-y-2 text-[11px] text-[#F5F2EB]/60">
              <p className="font-bold text-white flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D97746]" />
                Netlify Deployment Notes:
              </p>
              <p>• Build Command: <code className="text-[#D97746] font-mono">astro build</code></p>
              <p>• Publish Directory: <code className="text-[#D97746] font-mono">dist</code></p>
              <p>• Netlify Forms handles form data automatically via <code className="text-[#D97746] font-mono">data-netlify="true"</code></p>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="md:col-span-8 bg-[#0B1014] p-4 flex flex-col justify-between overflow-hidden">
            
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#263B46]">
              <span className="font-mono text-xs text-[#D97746] font-bold">
                {activeFile.path}
              </span>
              <button
                onClick={handleCopy}
                className="bg-[#1B2A32] hover:bg-[#263B46] text-white text-xs px-3 py-1.5 rounded border border-[#263B46] transition flex items-center gap-1.5 cursor-pointer font-medium"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="text-xs font-mono text-[#F5F2EB]/90 p-4 bg-[#11191F] rounded-lg border border-[#263B46] overflow-x-auto overflow-y-auto flex-grow max-h-[500px] leading-relaxed select-all">
              <code>{activeFile.content}</code>
            </pre>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#263B46] bg-[#0B1014] flex justify-between items-center text-xs">
          <span className="text-[#F5F2EB]/60">
            Grey River Lodge • Production Astro Template
          </span>
          <button
            onClick={onClose}
            className="bg-[#D97746] hover:bg-[#C26334] text-white px-5 py-2 rounded font-semibold cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
