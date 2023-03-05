import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery')


function createGallery(items) {
  return items
  .map( item => `
  <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`)
  .join('')
}

galleryDiv.innerHTML = createGallery(galleryItems)
galleryDiv.addEventListener('click', openImg)


function openImg(event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG") {
    return
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" heigth="600"/>
  `)
  instance.show();
  window.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
      instance.close()
    }
  })
}