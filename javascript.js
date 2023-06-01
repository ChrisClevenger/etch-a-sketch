

function buildPixels(value) {
    const sketchContainer = document.querySelector("#sketchContainer");

    for (x = 0; x < (value); x++) {

        const pixelBox = document.createElement('div'); 
        pixelBox.classList.add("pixelBox"); 
        sketchContainer.appendChild(pixelBox); 

        pixelBox.addEventListener('mouseover', () => {
            pixelBox.style.backgroundColor = 'red';
          });
        console.log(value); 
    }
}

buildPixels(1024); 