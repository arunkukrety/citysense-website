import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { LocateFixed } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L, { LatLngTuple, LatLngBoundsExpression } from 'leaflet';
import 'leaflet.heat';

declare module 'leaflet' {
  export interface HeatLayer {
    setLatLngs(latlngs: Array<[number, number, number]>): void;
  }
  
  export interface HeatLayerOptions {
    minOpacity?: number;
    maxZoom?: number;
    max?: number;
    radius?: number;
    blur?: number;
    gradient?: { [key: string]: string };
  }
  
  export interface LeafletStatic {
    heatLayer(latlngs: Array<[number, number, number]>, options?: HeatLayerOptions): HeatLayer;
  }
}

// Delhi's center coordinates
const DELHI_CENTER: LatLngTuple = [28.6139, 77.2090];
const DELHI_BOUNDS: LatLngBoundsExpression = [
  [28.4000, 76.8000], // Southwest
  [28.8000, 77.4000]  // Northeast
] as [LatLngTuple, LatLngTuple];

// Custom location control component
function LocationButton() {
  const map = useMap();
  const [loading, setLoading] = useState(false);

  const handleLocate = () => {
    setLoading(true);
    map.locate().on('locationfound', (e) => {
      map.flyTo(e.latlng, 14);
      setLoading(false);
    });
  };

  return (
    <button
      onClick={handleLocate}
      className="absolute bottom-5 right-5 z-[1000] bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100"
      disabled={loading}
    >
      <LocateFixed className={`h-6 w-6 ${loading ? 'animate-spin' : ''}`} />
    </button>
  );
}

interface Point {
  lat: number;
  lng: number;
  value: number;
}

// Custom hook to handle heatmap
function useHeatmap(containerRef: React.RefObject<HTMLDivElement>) {
  const map = useMap();
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Generate mock data for Delhi - this is sample data
    const generatePoints = (): Point[] => {
      const areas = [
        { pos: [28.6139, 77.2090] as LatLngTuple, value: 350 }, // Central Delhi
        { pos: [28.5500, 77.2000] as LatLngTuple, value: 150 }, // South Delhi
        { pos: [28.7000, 77.2000] as LatLngTuple, value: 250 }, // North Delhi
        { pos: [28.6300, 77.3000] as LatLngTuple, value: 400 }, // East Delhi
        { pos: [28.6500, 77.1000] as LatLngTuple, value: 200 }  // West Delhi
      ];

      const points: Point[] = [];
      areas.forEach(area => {
        // Generate more points for better coverage
        for (let i = 0; i < 100; i++) {
          const lat = area.pos[0] + (Math.random() - 0.5) * 0.15;
          const lng = area.pos[1] + (Math.random() - 0.5) * 0.15;
          points.push({
            lat,
            lng,
            value: area.value + Math.floor(Math.random() * 30) // Less variation for stability
          });
        }
      });
      return points;
    };

    // Create heat layer using Leaflet.heat with more stable configuration
    const points = generatePoints();
    const heatData: Array<[number, number, number]> = points.map(p => [p.lat, p.lng, p.value / 500]);

    const heat = L.heatLayer(heatData, {
      radius: 30,
      blur: 20,
      maxZoom: 18, // Increased max zoom level
      max: 1.0,
      minOpacity: 0.4, // Minimum opacity to ensure visibility
      gradient: {
        0.3: '#00ff00',
        0.5: '#ffff00',
        0.7: '#ff9900',
        0.9: '#ff0000'
      }
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map]);

  return null;
}

function HeatmapLayer({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  useHeatmap(containerRef);
  return null;
}

export function Map() {
  const heatmapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="map" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sample Map</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Delhi Air Quality Index (AQI) Heatmap
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            This is a demonstration using sample data to showcase how the final prototype would look with real-time sensor data
          </p>
        </div>

        <div className="relative h-[500px] md:h-[600px] w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={DELHI_CENTER}
            bounds={DELHI_BOUNDS}
            zoom={11}
            className="w-full h-full"
            zoomControl={true}
            minZoom={10}
            maxZoom={18}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <HeatmapLayer containerRef={heatmapContainerRef} />
            <LocationButton />
          </MapContainer>
          <div 
            ref={heatmapContainerRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-[400]"
          />

          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-xs">
            <div className="text-sm font-medium mb-3">Real-time AQI Levels</div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500"></div>
                <span className="text-xs">Good (0-100): Safe for outdoor activities</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-500"></div>
                <span className="text-xs">Moderate (101-200): Minor breathing discomfort</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-orange-500"></div>
                <span className="text-xs">Poor (201-300): Avoid prolonged exposure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500"></div>
                <span className="text-xs">Severe (301+): Hazardous conditions</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              * In the final prototype, this visualization will be powered by real-time data from our sensor network
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">About This Visualization</h3>
            <p className="text-sm text-gray-600">
              This heatmap demonstrates how our air quality monitoring system will work when deployed. 
              In the actual implementation, IoT sensors placed across Delhi will provide real-time AQI data, 
              allowing citizens to make informed decisions about outdoor activities and track pollution levels 
              in their area. The color intensity indicates pollution concentration, with green representing 
              safe levels and red indicating hazardous conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}