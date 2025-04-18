import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Map } from './components/Map';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Map />
        <Problem />
        <Solution />
      </main>
      
    </div>
  );
}

export default App;