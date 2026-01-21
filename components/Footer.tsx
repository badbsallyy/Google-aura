
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050505] mt-32">
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-white/60 flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Aura</span>
            </Link>
            <p className="text-white/40 text-sm max-w-sm mb-6">
              Create beautiful designs with AI-powered tools. Build landing pages, templates, and components in seconds.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/create" className="text-white/40 hover:text-white transition-colors text-sm">Create</Link></li>
              <li><Link to="/templates" className="text-white/40 hover:text-white transition-colors text-sm">Templates</Link></li>
              <li><Link to="/components" className="text-white/40 hover:text-white transition-colors text-sm">Components</Link></li>
              <li><Link to="/assets" className="text-white/40 hover:text-white transition-colors text-sm">Assets</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/learn" className="text-white/40 hover:text-white transition-colors text-sm">Learn</Link></li>
              <li><Link to="/changelog" className="text-white/40 hover:text-white transition-colors text-sm">Changelog</Link></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">About</a></li>
              <li><Link to="/pricing" className="text-white/40 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Aura. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
