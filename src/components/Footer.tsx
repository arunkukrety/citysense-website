import React from 'react';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Activity className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">CitySense</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering citizens with real-time urban data for safer, healthier communities.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                contact@citysense.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                City Center, Innovation Hub
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#problem" className="text-gray-400 hover:text-white">
                  Problems We Solve
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-white">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#map" className="text-gray-400 hover:text-white">
                  Live Map
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold">SDG Goals</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">SDG 3: Good Health and Well-Being</li>
              <li className="text-gray-400">SDG 11: Sustainable Cities and Communities</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CitySense by Infinite Aura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}