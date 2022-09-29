// Add imports above this line
import galleryTpls from '../js/templates/gallery.hbs';
import gallery from './gallery.json';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const refs = {
  galleryList: document.querySelector('.gallery'),
};

const galleryMarkup = createMarkup(gallery);

function createMarkup(gallery) {
  return galleryTpls(gallery);
}

refs.galleryList.innerHTML = '';
refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

refs.galleryList.addEventListener('click', onClick);

function onClick(e) {
  if (e.currentTarget === e.target) return;
  e.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
