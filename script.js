const etchContainer = document.querySelector('.etchContainer')
const rangeInput = document.querySelector('.rangeInput');
const gridSizePreview = document.querySelector('.gridSizePreview');
const createButton = document.querySelector('.createButton');

//Create grid of given dimensions



const createGrid = () => {

    if(etchContainer.firstChild){
        etchContainer.innerHTML = '';
    }

    const newSize = rangeInput.value;
    const squareDimension = (700/newSize)+'px';
    console.log(squareDimension)

    for (let i = 1; i <= newSize*newSize; i++){
        const div = document.createElement('div');
        div.style.width = squareDimension;
        div.style.height = squareDimension;   
        div.classList.add("square");
        etchContainer.appendChild(div);
    
    }
}


const updateGridSizePreview = (e) => {
    newSize = e.target.value;
    console.log(newSize)
    gridSizePreview.textContent = newSize+ " X " +newSize;
}

rangeInput.addEventListener('change',updateGridSizePreview);

createButton.addEventListener('click',createGrid);