function initFriendMap() {
  const map = L.map('friendsMap').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

function addFriendMarker(lat, lon, iconUrl, label, story) {
  const icon = L.icon({
    iconUrl: iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });

  L.marker([lat, lon], { icon: icon })
    .addTo(map)
    .bindPopup(`<strong>${label}</strong><br>${story}`);
}

    const popupContent = `
      <div style="text-align:center; max-width: 200px;">
        <strong>${caption}</strong><br>
        <p style="font-size: 0.9em;">${storyText}</p>
      </div>
    `;

    L.marker([lat, lon], { icon: icon })
      .addTo(map)
      .bindPopup(popupContent);
  }

addFriendMarker(35.6895, 139.6917, 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png', 'Tokyo, Japan', 'Story coming soon!');
addFriendMarker(33.2635, 130.3009, 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png', 'Saga, Japan', 'Story coming soon!');
addFriendMarker(40.6031, 140.4638, 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', 'Hirosaki, Japan', 'Story coming soon!');
addFriendMarker(37.5665, 126.9780, 'https://maps.google.com/mapfiles/ms/icons/green-dot.png', 'Seoul, South Korea', 'Story coming soon!');
addFriendMarker(38.2404, 140.3633, 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png', 'Yamagata, Japan', 'Story coming soon!');
addFriendMarker(24.8607, 67.0011, 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', 'Karachi, Pakistan', 'Story coming soon!');
addFriendMarker(40.7128, -74.0060, 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png', 'New York, USA', 'Story coming soon!');
addFriendMarker(35.5308, 139.7036, 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', 'Kawasaki, Japan', 'Story coming soon!');
addFriendMarker(47.6062, -122.3321, 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', 'Seattle, USA', 'Story coming soon!');
addFriendMarker(49.1666, -123.1336, 'https://maps.google.com/mapfiles/ms/icons/green-dot.png', 'Richmond, BC, Canada', 'Story coming soon!');
addFriendMarker(33.3528, -111.7890, 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', 'Gilbert, Arizona, USA', 'Story coming soon!');
addFriendMarker(35.1815, 136.9066, 'https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png', 'Nagoya, Japan', 'Story coming soon!');
addFriendMarker(56.9496, 24.1052, 'https://cdn-icons-png.flaticon.com/512/1350/1350120.png', '✈️ Airplane over Latvia', 'Story coming soon!');
addFriendMarker(37.7749, -122.4194, 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', 'San Francisco, USA', 'Story coming soon!');
addFriendMarker(34.7846, 135.4140, 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png', 'Hyogo, Japan', 'Story coming soon!');
addFriendMarker(43.0618, 141.3545, 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', 'Sapporo, Japan', 'Story coming soon!');
addFriendMarker(33.4484, -112.0740, 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', 'Phoenix, USA', 'Story coming soon!');
addFriendMarker(35.6074, 140.1065, 'https://cdn-icons-png.flaticon.com/512/2342/2342441.png', 'Chiba, Japan 💕', 'Story coming soon!');
addFriendMarker(39.9526, -75.1652, 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', 'Philadelphia, USA', 'Story coming soon!');
addFriendMarker(-37.8136, 144.9631, 'https://maps.google.com/mapfiles/ms/icons/green-dot.png', 'Melbourne, Australia', 'Story coming soon!');
}

window.addEventListener('load', initFriendMap);
