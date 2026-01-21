
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const PromptBuilder: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Generation feature coming soon! Your prompt: ' + prompt);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative bg-[#0d0d0d] rounded-2xl border border-white/10 p-2 shadow-2xl">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Describe the design you want to create... (e.g., 'A modern landing page for a SaaS product with hero section, features, and pricing')"
          className="w-full bg-transparent text-white placeholder:text-white/30 resize-none outline-none px-4 py-4 min-h-[120px] text-base"
          disabled={isGenerating}
        />
        
        <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-xs">
              {prompt.length > 0 ? `${prompt.length} characters` : 'Start typing to generate...'}
            </span>
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-xl text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles size={16} />
                <span>Generate</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <span className="text-white/40 text-sm">Try:</span>
        {[
          'Landing page for a fitness app',
          'E-commerce product page',
          'Portfolio website',
          'Blog homepage'
        ].map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => setPrompt(suggestion)}
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/60 text-sm hover:text-white hover:border-white/20 transition-all"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptBuilder;
