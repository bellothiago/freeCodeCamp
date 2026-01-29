const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn")
galleryItems.forEach(galleryItem => {
  galleryItem.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImage.src = galleryItem.src.replace("-thumbnail", "");
  })
})

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
})

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
})