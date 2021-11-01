const container = document.querySelector('.container');
const gridBtn = document.querySelector('#grid-btn');
const gridInput = document.querySelector('#grid-size');
const clearBtn = document.querySelector('.clear-all');

let gridSize = 16;
makeGrid(gridSize);

gridBtn.addEventListener('click', () => {
    const input = +gridInput.value;
    if (input && input <= 60) {
        makeGrid(input);
    }
})

function makeGrid(size) {
    container.innerHTML = '';
    container.setAttribute('style', 
        `grid-template-columns: repeat(${size}, auto);
        grid-template-rows: repeat(${size}, auto);`);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.append(square);
    }
    
    const squareItems = document.querySelectorAll('.square');
    squareItems.forEach(item =>
        item.addEventListener('mouseover', () => {
            item.classList.add('draw');
    }));

    clearBtn.addEventListener('click', () => {
        squareItems.forEach(item => item.className = 'square');
    })

    gridInput.value = '';
}




