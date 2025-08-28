import PhotoSwipeLightbox from "/new-site/assets/libs/photoswipe-lightbox/photoswipe-lightbox.esm.min.js";
import PhotoSwipe from "/new-site/assets/libs/photoswipe/photoswipe.esm.min.js";
const photoswipe = new PhotoSwipeLightbox({
  gallery: ".pswp-gallery",
  children: "a",
  pswpModule: PhotoSwipe,
});
photoswipe.init();
