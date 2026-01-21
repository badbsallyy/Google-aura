
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import PromptBuilder from '../components/PromptBuilder';
import TemplateCard from '../components/TemplateCard';
import { MOCK_TEMPLATES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-white/40 text-[13px] font-medium mb-12 hover:border-white/10 transition-colors cursor-pointer">
          <span className="text-white/60">✨</span>
          Sell templates with 0% commission
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
          Create beautiful designs
        </h1>
        
        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-10 font-medium">
          Generate top-tier landing pages in seconds. <a href="#" className="text-white hover:underline inline-flex items-center gap-1.5 ml-1">Watch video. <Play size={12} fill="currentColor" /></a>
        </p>

        <PromptBuilder />
      </section>

      {/* Main Content Sections */}
      <div className="max-w-[1440px] mx-auto px-6 space-y-24">
        
        {/* Trending Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Trending</h2>
            <Link to="/templates" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium">
              Browse Trending <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TEMPLATES.slice(0, 3).map(tpl => (
              <TemplateCard key={tpl.id} template={tpl} />
            ))}
          </div>
        </section>

        {/* Recently Featured Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Recently Featured</h2>
            <Link to="/templates" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium">
              Browse Featured <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TEMPLATES.slice(2, 5).map(tpl => (
              <TemplateCard key={tpl.id} template={tpl} />
            ))}
          </div>
        </section>

        {/* Free Templates Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Free Templates</h2>
            <Link to="/templates" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium">
              Browse Free Templates <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TEMPLATES.slice(4, 7).concat(MOCK_TEMPLATES.slice(0, 1)).map(tpl => (
              <TemplateCard key={tpl.id} template={tpl} />
            ))}
          </div>
        </section>

        {/* Pro Templates Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Pro Templates</h2>
            <Link to="/templates" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium">
              Browse Pro Templates <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TEMPLATES.filter(t => t.isPro).map(tpl => (
              <TemplateCard key={tpl.id} template={tpl} />
            ))}
          </div>
        </section>

        {/* Paid Templates Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Paid Templates</h2>
            <Link to="/templates" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium">
              Browse Paid Templates <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TEMPLATES.filter(t => t.price).map(tpl => (
              <TemplateCard key={tpl.id} template={tpl} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
