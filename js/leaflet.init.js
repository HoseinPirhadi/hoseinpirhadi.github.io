var map = L.map('map').setView([35.6892, 51.3890], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  var marker = L.marker([35.6892, 51.3890]).addTo(map);
  marker.bindPopup("<b>Tehran, IR</b>").openPopup();