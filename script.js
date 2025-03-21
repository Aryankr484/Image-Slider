let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let images = document.querySelectorAll('.img img');

let currentIndex = 0;
images[currentIndex].classList.add('active');
// images[currentIndex].classList.add('moveleft');
function showImage(index){
    images.forEach((img,i)=>{
        img.classList.toggle('active', i===index);
        
    })
}
function moveLeft(index){
    images.forEach((img,i)=>{
        img.classList.toggle('moveleft', i===index-1);
    });
    if(index===0){
        images[images.length-1].classList.add('moveleft');
    }
}
function moveRight(index){
    images.forEach((img,i)=>{
        img.classList.toggle('moveright', i===index+1);
    });
    if(index===2){
        images[0].classList.add('moveright');
    }
}

function nextImage(){
    images.forEach((img)=>{
        img.classList.remove('moveright');
    });
    currentIndex=(currentIndex + 1) % images.length;
    showImage(currentIndex);
    moveLeft(currentIndex);
}
function prevImage() {
    images.forEach((img)=>{
        img.classList.remove('moveleft');
    });
    currentIndex=(currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    moveRight(currentIndex);
  }
  next.addEventListener('click', nextImage);
  prev.addEventListener('click', prevImage);
 