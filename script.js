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
}).addTo(map).bindPopup("Tokyo, Japan").openPopup(); 

L.marker([33.2635, 130.3009], {
  icon: L.icon({
    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
}).addTo(map).bindPopup("Saga, Japan");