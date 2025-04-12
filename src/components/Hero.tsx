import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80"
          alt="City skyline"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 animate-gradient bg-[length:400%_400%]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-5xl lg:text-6xl animate-slide-up">
          Real-time Insights for a
          <span className="block text-primary animate-float bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">Smarter, Safer City</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-white/90 font-sans animate-slide-up" style={{ animationDelay: '200ms' }}>
          CitySense empowers citizens with real-time, transparent data on critical urban issues like hygiene, air pollution, potholes, and flooded roads, contributing to safer and healthier communities.
        </p>
        <div className="mt-10 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <a
            href="#map"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors duration-300 group"
          >
            View Live Map
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}