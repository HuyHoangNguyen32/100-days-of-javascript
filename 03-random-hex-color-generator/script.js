'use strict';

const color = document.querySelector('.color');
const btn = document.querySelector('.generate');

const generateColor = () => {
  const randomText = Math.random().toString(16).substring(2, 8);
  const randomColor = `#${randomText}`;
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
};

btn.addEventListener('click', generateColor);

generateColor();

// hfahfhahfa