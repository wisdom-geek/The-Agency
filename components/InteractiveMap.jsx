"use client";

import { useState, useEffect } from "react";

export default function InteractiveMap() {
  // State to store map instance
  const [map, setMap] = useState(null);
  // San Francisco coordinates (approx location of tech district)
  const position = [37.7749, -122.4194];
  const zoomLevel = 15;

  useEffect(() => {
    // Only run this on the client-side
    if (typeof window !== "undefined") {
      // Dynamic import of leaflet
      import("leaflet").then((L) => {
        // Clean up existing map instance if any
        if (map) map.remove();

        // Fix for marker icons in Leaflet with React
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/images/marker-shadow.png",
        });

        // Create map
        const mapInstance = L.map("map").setView(position, zoomLevel);

        // Add tile layer (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(mapInstance);

        // Add a marker for the office location
        const marker = L.marker(position).addTo(mapInstance);
        marker
          .bindPopup(
            "<b>Our Office</b><br>Chandaria Business Center<br>Kenyatta University<br>Nairobi, Kenya"
          )
          .openPopup();

        // Add a circle to highlight the area
        L.circle(position, {
          color: "blue",
          fillColor: "#30b",
          fillOpacity: 0.2,
          radius: 200,
        }).addTo(mapInstance);

        setMap(mapInstance);
      });
    }

    // Cleanup function
    return () => {
      if (map) map.remove();
    };
  }, []); // Empty dependency array means this runs once on mount

  // Add Leaflet CSS
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div id="map" className="w-full h-full rounded-lg z-0"></div>
    </div>
  );
}
