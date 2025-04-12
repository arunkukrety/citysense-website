import React from 'react';
import { AlertTriangle, Wind, Loader as Road, Droplets } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Poor Hygiene',
      description: 'Unsanitary conditions in public spaces pose health risks to citizens.',
    },
    {
      icon: Wind,
      title: 'Air Pollution',
      description: 'Deteriorating air quality affects respiratory health and quality of life.',
    },
    {
      icon: Road,
      title: 'Road Damage',
      description: 'Potholes and road damage cause accidents and vehicle damage.',
    },
    {
      icon: Droplets,
      title: 'Urban Flooding',
      description: 'Poor drainage and heavy rains lead to flooded streets and infrastructure damage.',
    },
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slide-up">
          <h2 className="text-3xl font-display font-bold text-secondary">Urban Challenges We Address</h2>
          <p className="mt-4 text-xl text-secondary/80 font-sans">
            Our cities face critical issues that affect daily life and well-being.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div 
              key={problem.title} 
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-light rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-6 py-8 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-glow">
                <problem.icon className="h-8 w-8 text-primary animate-pulse-slow" />
                <div className="space-y-2">
                  <p className="text-xl font-display font-semibold text-secondary hover:text-primary transition-colors">{problem.title}</p>
                  <p className="text-secondary/70 font-sans">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}