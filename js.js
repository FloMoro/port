const container = document.getElementsByClassName('btna');
const html = document.querySelector('html');

const closeBtn = document.querySelector('.closebtn');

for (let i = 0; i<container.length; i++){
container[i].addEventListener('click', ()=>{
    html.classList.toggle('active');
})}

closeBtn.addEventListener('click', ()=>{
    html.classList.toggle('active');
})