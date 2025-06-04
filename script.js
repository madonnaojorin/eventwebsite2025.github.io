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
L.marker([35.6895, 139.6917],{
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