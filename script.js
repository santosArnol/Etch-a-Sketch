const etchContainer = document.querySelector('.etchContainer')
const rangeInput = document.querySelector('.rangeInput');
const gridSizePreview = document.querySelector('.gridSizePreview');
const createButton = document.querySelector('.createButton');

//Create grid of given dimensions

const updateSquare = (e) =>{
    e.target.style.backgroundColor = "red"

}

const createGrid = () => {

    const calculateDimensions = () => (700/rangeInput.value)+'px';
    
    const addSquare = () => {
        const div = document.createElement('div');
        div.style.width = squareDimension;
        div.style.height = squareDimension;   
        div.classList.add("square");
        div.addEventListener('mouseover',updateSquare);
        return div;
    }

    const clearGrid = () => {
        etchContainer.innerHTML = '';
    }
    

    
    if(etchContainer.firstChild){
        clearGrid();
    }
    squareDimension = calculateDimensions();
    const newSize = rangeInput.value;
    for (let i = 1; i <= newSize*newSize; i++){
        etchContainer.appendChild(addSquare());
}
}


const updateGridSizePreview = (e) => {
    newSize = e.target.value;
    gridSizePreview.textContent = newSize+ " X " +newSize;
}


rangeInput.addEventListener('change',updateGridSizePreview);

createButton.addEventListener('click',createGrid);