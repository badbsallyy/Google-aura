
import React from 'react';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-bold mb-6">Simple, transparent pricing</h1>
        <p className="text-white/40 text-xl">Choose the plan that's right for you and your team.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Starter */}
        <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/5 flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-white/40 text-sm">Great for side projects and learning.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-white/40 ml-1">/mo</span>
          </div>
          <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 font-semibold text-sm hover:bg-white/10 transition-all mb-10">
            Get Started
          </button>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-white/60"><Check size={16} className="text-white" /> 3 projects</li>
            <li className="flex items-center gap-3 text-sm text-white/60"><Check size={16} className="text-white" /> Standard AI generation</li>
            <li className="flex items-center gap-3 text-sm text-white/60"><Check size={16} className="text-white" /> Basic components</li>
          </ul>
        </div>

        {/* Pro */}
        <div className="p-8 rounded-3xl bg-white/5 border-2 border-white/10 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 px-4 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">POPULAR</div>
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-white/40 text-sm">Perfect for professionals and small agencies.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-white/40 ml-1">/mo</span>
          </div>
          <button className="w-full py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all mb-10">
            Upgrade to Pro
          </button>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-white/90"><Check size={16} className="text-white" /> Unlimited projects</li>
            <li className="flex items-center gap-3 text-sm text-white/90"><Check size={16} className="text-white" /> Advanced Gemini 3 Pro model</li>
            <li className="flex items-center gap-3 text-sm text-white/90"><Check size={16} className="text-white" /> Premium component library</li>
            <li className="flex items-center gap-3 text-sm text-white/90"><Check size={16} className="text-white" /> Figma export</li>
            <li className="flex items-center gap-3 text-sm text-white/90"><Check size={16} className="text-white" /> Priority support</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="p-8 rounded-3xl bg-[#0d0d0d] border border-white/5 flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-2">Team</h3>
            <p className="text-white/40 text-sm">For growing teams and collaborative work.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-white/40 ml-1">/mo</span>
          </div>
          <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 font-semibold text-sm hover:bg-white/10 transition-all mb-10">
            Contact Sales
          </button>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm text-white/60"><Check size={16} className="text-white" /> Everything in Pro</li>
            <li className="flex items-center gap-3 text-sm text-white/60"><Check size={16} className="text-white" /> Team shared assets</li>
            <li className="flex items-center gap-3 text-sm text-white/60"><Check size={16} className="text-white" /> Custom domain hosting</li>
            <li className="flex items-center gap-3 text-sm text-white/60"><Check size={16} className="text-white" /> SSO & Admin controls</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
