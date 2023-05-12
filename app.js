const slider = document.querySelector('.slider')

const sliderDown = document.querySelector('.slider__down')
const sliderUp = document.querySelector('.slider__up')
const slidesCount = sliderDown.querySelectorAll('div').length
console.log(slidesCount);
const rightBtn = document.querySelector('.right-btn')
const leftBtn = document.querySelector('.left-btn')

let activeSlideIndex = 0



sliderDown.style.left = `-${(slidesCount - 1) * 100}vw`

leftBtn.addEventListener('click', function () {
    nextSlide('left')
})
rightBtn.addEventListener('click', function () {
    nextSlide('right')
})

function nextSlide(direction) {
    console.log(direction);

    if (direction === 'left') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    
    } else if (direction === 'right') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
     
    }


    const widthWindow = slider.clientWidth
   

    sliderDown.style.transform = `translateX(${activeSlideIndex*widthWindow}px)`
    sliderUp.style.transform = `translateX(-${activeSlideIndex*widthWindow}px)`

}
