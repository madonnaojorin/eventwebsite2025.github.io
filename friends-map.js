function initFriendMap() {
  const map = L.map('friendsMap').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  function addFriendMarker(lat, lon, imageName, caption, storyText) {
    const icon = L.icon({
      iconUrl: `friends/${imageName}`,
      iconSize: [50, 50],
      className: 'circle-icon'
    });

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

  // Example: replace with your real data
  addFriendMarker(40.7, -74.0, 'haruki.jpeg', 'Nao (New York)', 'We met in grad school and bonded over data visualization!');
  addFriendMarker(35.7, 139.7, 'lisa.jpg', 'Lisa (Tokyo)', 'We were roommates in college and reunited in NYC years later.');
}

window.addEventListener('load', initFriendMap);
