'use strict';

const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');

function copyText(e) {
  e.preventDefault();

  // OLD Solution
  // coupon.select();
  // coupon.setSelectionRange(0, 999999);
  // document.execCommand('copy');

  // New Solution
  try {
    const text = coupon.value;
    coupon.select();
    const copiedText = navigator.clipboard.write(text);
  } catch {
    console.log('copy is not supported');
  }
}

btn.addEventListener('click', copyText);
