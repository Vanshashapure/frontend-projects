const lightbox = document.querySelector('#lightbox')
const lightboxImg = document.querySelector('#lightbox-img')
const closeBtn = document.querySelector('#close-btn')

function openLightbox(src) {
  lightboxImg.src = src
  lightbox.classList.add('active')
}

closeBtn.addEventListener('click', function() {
  lightbox.classList.remove('active')
})

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    lightbox.classList.remove('active')
  }
})