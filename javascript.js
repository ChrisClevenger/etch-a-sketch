function buildPixels(value) {
    const sketchContainer = document.querySelector("#sketchContainer");

    for (x = 0; x < (value); x++) {
        const pixelBox = document.createElement('div'); 
        pixelBox.style.cssText = "background-color: blue; height: 32px; width: 32px; margin: 0; display: flex; flex: 1, 0; flex-wrap: wrap; align-content: flex-start; border-style: solid; padding: 0;"
        sketchContainer.appendChild(pixelBox); 
        console.log(value); 
    }
}

buildPixels(256); 