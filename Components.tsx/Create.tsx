
import React from 'react';
import PromptBuilder from '../components/PromptBuilder';
import { Sparkles, Zap, Layout } from 'lucide-react';

const CreatePage: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-24 text-center">
       <div className="mb-20">
          <h1 className="text-6xl font-bold tracking-tight mb-6">What will you build?</h1>
          <p className="text-white/40 text-xl max-w-xl mx-auto">
            Bring your vision to life by describing what you want to create.
          </p>
       </div>

       <PromptBuilder />

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/5">
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Sparkles className="text-white/60" size={24} />
             </div>
             <h3 className="text-lg font-semibold mb-3">1. Prompt your vision</h3>
             <p className="text-white/40 text-sm leading-relaxed">
               Describe your ideal landing page, product, or specific section in plain English.
             </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/5">
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Zap className="text-white/60" size={24} />
             </div>
             <h3 className="text-lg font-semibold mb-3">2. Generate in seconds</h3>
             <p className="text-white/40 text-sm leading-relaxed">
               Our AI models process your requirements and build a high-fidelity design instantly.
             </p>
          </div>
          <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/5">
             <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                <Layout className="text-white/60" size={24} />
             </div>
             <h3 className="text-lg font-semibold mb-3">3. Refine & Export</h3>
             <p className="text-white/40 text-sm leading-relaxed">
               Use our visual editor to tweak details and export directly to HTML or Figma.
             </p>
          </div>
       </div>
    </div>
  );
};

export default CreatePage;
