// Initialize the map
const map = L.map('mapid').setView([20, 0], 2);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Helper to create friend markers
function addFriendMarker(lat, lon, image, storyUrl, label) {
  const icon = L.icon({
    iconUrl: `friends/${image}`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });

  L.marker([lat, lon], { icon }).addTo(map)
    .bindPopup(`<a href="stories/${storyUrl}" target="_blank">${label}</a>`);
}

// Example entries (replace with real data)
addFriendMarker(35.6895, 139.6917, 'nao.jpg', 'nao.html', 'Nao from Tokyo');
addFriendMarker(40.7128, -74.0060, 'lisa.jpg', 'lisa.html', 'Lisa from New York');
addFriendMarker(49.1666, -123.1336, 'friend1.jpg', 'friend1.html', 'Friend 1 from Vancouver');
addFriendMarker(37.5665, 126.9780, 'friend2.jpg', 'friend2.html', 'Friend 2 from Seoul');

// Add more entries below as needed
// addFriendMarker(LAT, LON, 'image.jpg', 'story.html', 'Label');
