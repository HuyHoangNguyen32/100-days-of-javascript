// Variable
const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');

btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

// Open Modal
function openModal(e) {
  e.preventDefault();
  modal.style.display = 'block';
}

// Close Modal
function closeModal() {
  modalContent.classList.add('slide-up');

  setTimeout(() => {
    modal.style.display = 'none';
    modalContent.classList.remove('slide-up');
  }, 500);

}
