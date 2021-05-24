function randomColor() {
    return Math.floor( Math.random() * 250 );
}
let bg = document.querySelector('#bg');
function changeColor() {
    bg.style.backgroundColor = 'rgba(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')'
}