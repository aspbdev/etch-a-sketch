const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    container.append(square);
}

const squareItems = document.querySelectorAll('.square');

console.log(squareItems);
squareItems.forEach(item =>
    item.addEventListener('mouseover', () => {
        item.classList.add('draw');
    }));

const clearBtn = document.querySelector('.clear-all');

clearBtn.addEventListener('click', () => {
    squareItems.forEach(item => item.className = 'square');
})