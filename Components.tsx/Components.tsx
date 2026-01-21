
import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { COMPONENT_CATEGORIES } from '../constants';

const ComponentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Popular');

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-5xl font-bold mb-4">Explore components</h1>
          <p className="text-white/40 text-lg">Browse a library of beautiful, responsive components built with Aura.</p>
        </div>
        
        <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1 border border-white/5">
          {['Popular', 'Explore', 'Recent'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">All Components</button>
        {COMPONENT_CATEGORIES.map(category => (
          <button key={category} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm hover:text-white hover:border-white/20 transition-all">
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
        <input 
          type="text" 
          placeholder="Search components..." 
          className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-white/30 transition-all"
        />
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="group bg-[#0d0d0d] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
            <div className="aspect-[1.4] bg-white/[0.02] flex items-center justify-center p-8 overflow-hidden relative">
               <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-lg transform transition-transform group-hover:scale-105"></div>
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider">Preview</button>
               </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-sm font-medium text-white/80">Premium Button Set {i+1}</span>
              <span className="text-[10px] uppercase font-bold text-white/30">CTA</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;
