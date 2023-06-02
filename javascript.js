// Run the necessary querySelectors for sketchContainer and the pixel size selector 

const pixelSelector = document.querySelector("#pixelSelector");
const sketchContainer = document.querySelector("#sketchContainer");

// Output pixel size value to use to build pixel grid 

pixelSelector.addEventListener("change", () => {
  const chosenValue = parseInt(pixelSelector.value);
  buildPixels(chosenValue);
});

// Build the pixel grid and resize container

function buildPixels(value) {
  sketchContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;

  sketchContainer.innerHTML = "";

  for (let x = 0; x < value * value; x++) {
    const pixelBox = document.createElement("div");
    pixelBox.classList.add("pixelBox");
    sketchContainer.appendChild(pixelBox);

    // Mouseover function to change color 

    pixelBox.addEventListener("mouseover", () => {
      pixelBox.style.backgroundColor = "black";
    });
  }
}

// Build functionality for RGB Button/Backgrounds

const rgbButton = document.querySelector("#rgb"); 

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

rgbButton.addEventListener("click", () => {
    const pixelBoxes = document.querySelectorAll(".pixelBox");
  
    pixelBoxes.forEach((pixelBox) => {
      pixelBox.addEventListener("mouseover", () => {
        pixelBox.style.backgroundColor = getRandomColor();
      });
    });
  });

  // Build functionality for blackButton

  const blackButton = document.querySelector("#black"); 

  blackButton.addEventListener("click", () => {
    const pixelBoxes = document.querySelectorAll(".pixelbox"); 

    pixelBoxes.forEach((pixelBox) => {
        pixelBox.addEventListener("mouseover", () => {
            pixelBox.style.backgroundColor = "black"; 
        }); 
    }); 
  }); 

buildPixels(parseInt(pixelSelector.value));