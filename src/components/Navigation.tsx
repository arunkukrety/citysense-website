import React, { useState } from 'react';
import { Activity, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center animate-fade-in">
            <Activity className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-display font-bold text-secondary hover:text-primary transition-colors">CitySense</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex items-center space-x-8 animate-fade-in">
            <a href="#map" className="font-sans font-medium text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-glow">Live Map</a>
            <a href="#problem" className="font-sans font-medium text-secondary hover:text-primary transition-all duration-300 hover:scale-105">Problems</a>
            <a href="#solution" className="font-sans font-medium text-secondary hover:text-primary transition-all duration-300 hover:scale-105">Solution</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} animate-slide-in`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <a href="#map" className="block px-3 py-2 text-white bg-primary hover:bg-primary-dark rounded-md font-medium transition-colors">Live Map</a>
          <a href="#problem" className="block px-3 py-2 text-secondary hover:text-primary font-medium transition-colors">Problems</a>
          <a href="#solution" className="block px-3 py-2 text-secondary hover:text-primary font-medium transition-colors">Solution</a>
        </div>
      </div>
    </nav>
  );
}