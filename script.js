const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
const imageNum = 10;
btnEl.addEventListener("click", () => {
  addNewImage();
});
function addNewImage() {
  for (let index = 0; index < imageNum; index++) {
    const newImagEl = document.createElement("img");
    newImagEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImagEl);
  }
}
