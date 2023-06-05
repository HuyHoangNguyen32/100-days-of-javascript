const countTo = '2023-6-15 10:00:00';

const countDown = setInterval(() => {
  const endDate = new Date(countTo);
  const currentDate = new Date();
  const totalSeconds = (endDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const showTime = document.getElementById('countdown');
  showTime.textContent = `${format(days)} Days ${(hours)} Hrs ${format(minutes)} Min ${format(seconds)} s`;

  if (totalSeconds < 0) {
    clearInterval(countDown);
    showTime.textContent = 'Welcome to NAL Japan';
  }
}, 1000);

function format(t) {
  return t < 10 ? `0${t}` : t
}