const screen = document.querySelector('.screen');
const buttons = Array.from(document.querySelectorAll('.btn'));
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');


buttons.map(buttons => {
    buttons.addEventListener('click', e => {
        
        screen.value += buttons.textContent;
    })
});

equal.addEventListener('click', e => {
    screen.value = eval(screen.value)
});

clear.addEventListener('click', e => {
    screen.value = '';
});

back.addEventListener('click', e => {
    screen.value = screen.value.slice(0, -1);
})




