const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");
generateColor();
function generateColor() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColor = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColor;
    colorContainerEl.innerText = "#" + newColor;
  });
}
function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode = colorCode + chars[randomNum];
  }
  return colorCode;
}
