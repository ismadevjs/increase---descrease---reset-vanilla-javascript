let value = document.querySelector('#value')
let decrease = document.querySelector('.decrease')
let reset = document.querySelector('.reset')
let increase = document.querySelector('.increase')

let i = 0;

increase.addEventListener('click', function() {
    i += 1;
    value.textContent = i;
})

decrease.addEventListener('click', function() {
    i -= 1;
    value.textContent = i;
})

reset.addEventListener('click', function() {
    i = 0;
    value.textContent = "0";
})