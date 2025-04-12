import React from 'react';
import { Cpu, Cloud, Database, LineChart } from 'lucide-react';

export function Solution() {
  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
          <p className="mt-4 text-xl text-gray-600">
            Using advanced IoT and AI technology to monitor and analyze urban conditions in real-time.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          
          <div className="relative flex justify-between">
            <div className="bg-gray-50 px-4">
              <Cpu className="h-8 w-8 text-blue-600" />
              <p className="mt-2 font-medium text-gray-900">Data Collection</p>
              <p className="text-sm text-gray-500">ESP32-CAM, GPS, MQ-135 sensors</p>
            </div>
            
            <div className="bg-gray-50 px-4">
              <Cloud className="h-8 w-8 text-blue-600" />
              <p className="mt-2 font-medium text-gray-900">Cloud Processing</p>
              <p className="text-sm text-gray-500">Real-time data transmission</p>
            </div>
            
            <div className="bg-gray-50 px-4">
              <Database className="h-8 w-8 text-blue-600" />
              <p className="mt-2 font-medium text-gray-900">AI Analysis</p>
              <p className="text-sm text-gray-500">Advanced data processing</p>
            </div>
            
            <div className="bg-gray-50 px-4">
              <LineChart className="h-8 w-8 text-blue-600" />
              <p className="mt-2 font-medium text-gray-900">Visualization</p>
              <p className="text-sm text-gray-500">Interactive maps and insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}