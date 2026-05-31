const items = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

items.forEach(img => {

  img.addEventListener('click', () => {
    lightbox.classList.add('show');
    lightboxImg.src = img.src;
  });

});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox){
    lightbox.classList.remove('show');
  }
});