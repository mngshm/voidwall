let wallDiv = document.querySelector(".wallDiv");
let wallPath = "assets/walls/";

addImages = (n, path, mainDiv) => {
  for (let i = 1; i <= n; i++) {
    const image = document.createElement("img");

    image.src = `${path}${i}.png`;
    image.classList.add("wall");

    mainDiv.appendChild(image);
  }
};

addImages(10, wallPath, wallDiv);
