// ! Chỉ hoạt động trên https

const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});

function showPosition(position) {
  console.log('hello position');
  userLocation.innerHTML = `
    Latitude: ${position.coords.latitude} <br>
    Longitude: ${position.coords.longitude}
  `;
}
