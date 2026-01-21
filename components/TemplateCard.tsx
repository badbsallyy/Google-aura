
import React from 'react';
import { Template } from '../types';
import { Heart, Copy } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <div className="group relative bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all">
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={template.thumbnail} 
          alt={template.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
            Preview
          </button>
          <button className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm">
            Remix
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {template.isPro && (
            <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium rounded">
              PRO
            </span>
          )}
          {template.price && (
            <span className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded">
              {template.price}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-medium mb-3 line-clamp-2 text-sm">
          {template.title}
        </h3>

        <div className="flex items-center justify-between">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xs font-medium text-white">
              {template.author.initials}
            </div>
            <span className="text-white/40 text-xs">{template.author.name}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-white/40 text-xs">
            <div className="flex items-center gap-1">
              <Copy size={12} />
              <span>{template.remixes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart size={12} />
              <span>{template.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
