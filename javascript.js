function buildPixels(value) {
    const sketchContainer = document.querySelector("#sketchContainer");

    for (x = 0; x < (value); x++) {
        const pixelBox = document.createElement('div'); 
        pixelBox.style.cssText = "background-color: blue; border-style: solid;"
        sketchContainer.appendChild(pixelBox); 
        console.log(value); 
    }
}

buildPixels(1024); 