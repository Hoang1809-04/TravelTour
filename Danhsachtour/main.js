
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

const root = document.querySelector(':root');

c1.addEventListener('click',function(){
    root.style.setProperty('--color2', '#333333d6');
    localStorage.setItem('pickColor', '#333333d6');
})
c2.addEventListener('click',function(){
    root.style.setProperty('--color2', '#e2bb10d6');
    localStorage.setItem('pickColor', '#e2bb10d6');
})
c3.addEventListener('click',function(){
    root.style.setProperty('--color2', '#009942d6');
    localStorage.setItem('pickColor', '#009942d6');
})

function loadTheme() {
    if(localStorage.getItem('pickColor') != '') {
        root.style.setProperty('--color2', localStorage.getItem('pickColor'));
    }
}
