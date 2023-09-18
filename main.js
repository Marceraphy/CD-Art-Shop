'use strict'
/*constantes y variables*/
const imgList = document.querySelectorAll('.imagen')
const lightbox = document.querySelector('.lightbox')
const grande = document.querySelector('.grande')
const closeImg = document.querySelector('.close')

imgList.forEach((eachIMG, index) => {
    imgList[index].addEventListener('click', () => {
        lightbox.classList.add('isActive');
        grande.src = event.target.src;
    });
});

closeImg.addEventListener('click',()=>{
    lightbox.classList.remove('isActive')
})