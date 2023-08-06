const etchContainer = document.querySelector('.etchContainer')

//Create grid of given dimensions

const squareDimension = (700/2)+'px';

for (let i = 1; i <= 2*2; i++){
    const div = document.createElement('div');
    div.style.width = squareDimension;
    div.style.height = squareDimension;   
    div.classList.add("square");
    etchContainer.appendChild(div);

}

const rangeInput = document.querySelector('.rangeInput');
const gridSizePreview = document.querySelector('.gridSizePreview');
 
const updateGridSizePreview = (e) => {
    newSize = e.target.value;
    console.log(newSize)
    gridSizePreview.textContent = newSize+ " X " +newSize;
}

rangeInput.addEventListener('change',updateGridSizePreview);