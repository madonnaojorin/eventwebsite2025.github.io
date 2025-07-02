// Countdown Timer
const timer = document.getElementById("timer");
const partyTime = new Date("2025-07-05T21:00:00-04:00"); // EDT time

function updateCountdown() {
  const now = new Date();
  const diff = partyTime - now;

  if (diff <= 0) {
    timer.innerHTML = "🎉 It's party time!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Map setup
const map = L.map("mapid").setView([20, 0], 2); // Center on global view

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Example: Add one marker manually
L.marker([35.7107, 139.8016],{
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Tokyo, Japan");

L.marker([33.2635, 130.3009], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Saga, Japan");

L.marker([40.6031, 140.4638], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Hirosaki, Japan");

L.marker([37.5665, 126.9780], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Seoul, South Korea");


L.marker([38.2404, 140.3633], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Yamagata, Japan");

L.marker([24.8607, 67.0011], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Karachi, Pakistan");

L.marker([40.7128, -74.0060], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("New York, USA");

L.marker([35.5308, 139.7036], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Kawasaki, Japan");

L.marker([47.6062, -122.3321], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Seattle, USA");

L.marker([49.1666, -123.1336], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Richmond, BC, Canada");

L.marker([33.3528, -111.7890], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Gilbert, Arizona, USA");

L.marker([35.1815, 136.9066], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Nagoya, Japan");

L.marker([56.9496, 24.1052], {
  icon: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1350/1350120.png',
    iconSize: [40, 40],        // Adjust size as needed
    iconAnchor: [20, 40]       // Position so the tip aligns with the coordinates
  })
}).addTo(map).bindPopup("✈️ Airplane over Latvia");

L.marker([37.7749, -122.4194], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("San Francisco, USA");

L.marker([34.7846, 135.4140], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Hyogo, Japan");

L.marker([43.0618, 141.3545], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Sapporo, Japan");

L.marker([33.4484, -112.0740], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Phoenix, USA");

L.marker([35.6074, 140.1065], {
  icon: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2342/2342441.png',
    iconSize: [40, 40],       // Resize as needed
    iconAnchor: [20, 40]      // Align icon base with map point
  })
}).addTo(map).bindPopup("Chiba, Japan 💕");

L.marker([39.9526, -75.1652], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  })
}).addTo(map).bindPopup('Philadelphia, USA');

L.marker([-37.8136, 144.9631], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Melbourne, Australia");

L.marker([35.6074,  139.6917], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
   iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Tokyo, Japan");
