import React from 'react';
import { Activity } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">CitySense</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#map" className="text-gray-600 hover:text-gray-900">Live Map</a>
            <a href="#problem" className="text-gray-600 hover:text-gray-900">Problems</a>
            <a href="#solution" className="text-gray-600 hover:text-gray-900">Solution</a>
          </div>
        </div>
      </div>
    </nav>
  );
}