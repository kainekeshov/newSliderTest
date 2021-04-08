//! Slider
let img = document.querySelector('.slider__image');
let dots = document.querySelectorAll('.slider__dots');

let imgArr = ['./img/1.webp',
    './img/2.webp',
    './img/3.webp',
    './img/4.webp',
    './img/5.webp',
    './img/6.webp',
    './img/7.webp',
    './img/8.webp',
    './img/9.webp'
];

let sliderChangerLeft = document.querySelector('.slider__changer-left');
sliderChangerLeft.setAttribute('onclick', 'nextImg(-1)');

let sliderChangerRight = document.querySelector('.slider__changer-right');
sliderChangerRight.setAttribute('onclick', 'nextImg(1)');

let sliderDots = document.querySelectorAll('.slider__dots');

function setOnclickSliderDots(arr) {
    let idCount = 0
    for (let id of arr) {
        arr[idCount].setAttribute('onclick',`changeImg(${idCount})`);
        idCount += 1;
    }
}

setOnclickSliderDots(sliderDots)

let currentIndex = 0;

function changeImg(ind) {
    currentIndex = ind;
    slideImg(currentIndex);
}

function nextImg(direction) {
    currentIndex += direction;

    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imgArr.length - 1;
    };
    slideImg(currentIndex);
}

function slideImg(index) {
    img.src = imgArr[index];
    updateDots(index, dots);
};

//! Right slider with Background-Colors

let containerRight, testIndex, colorsArr, rightSwitcher, leftSwitcher;

containerRight = document.querySelector('.container__right');

colorsArr = [
    'background-color: #b2f7ef',
    'background-color: #f94144',
    'background-color: #f3722c',
    'background-color: #f8961e',
    'background-color: #f9844a',
    'background-color: #f9c74f',
    'background-color: #90be6d',
    'background-color: #43aa8b',
];

let right__dots = document.querySelectorAll('.left__dots')

leftSwitcher = document.querySelector('.left');
leftSwitcher.setAttribute('onclick', 'nextColor(-1)');

rightSwitcher = document.querySelector('.right');
rightSwitcher.setAttribute('onclick', 'nextColor(1)')

function setOnclickLeftDots(arr) {
    let idCount = 0
    for (let id of arr) {
        arr[idCount].setAttribute('onclick',`changeColor(${idCount})`);
        idCount += 1;
    }
};

setOnclickLeftDots(right__dots)

testIndex = 0;

function changeColor(ind) {
    testIndex = ind;
    slideColor(testIndex);
};

function slideColor(index) {
    containerRight.style = colorsArr[index];
    updateDots(index, right__dots);
};

function nextColor(dir) {
    testIndex += dir;
    if (testIndex >= colorsArr.length) {
        testIndex = 0;
    } else if (testIndex < 0) {
        testIndex = colorsArr.length - 1;
    };
    slideColor(testIndex);
}

//! Left slider with Content

let text = document.querySelectorAll('.text');

leftSwitcher = document.querySelector('.left2');
leftSwitcher.setAttribute('onclick', 'nextText(-1)');

rightSwitcher = document.querySelector('.right2');
rightSwitcher.setAttribute('onclick', 'nextText(1)');

let left__dots = document.querySelectorAll('.left__dot');

function setOnclickRightDots(arr) {
    let idCount = 0;
    for (let id of arr) {
        arr[idCount].setAttribute('onclick',`changeText(${idCount})`);
        idCount += 1;
    };
};

setOnclickRightDots(left__dots);

count = 0;

function changeText(ind) {
    for (let i of text) {
        i.classList.remove('able');
    };
    text[ind].classList.add('able');
    updateDots(ind, left__dots);
};

function nextText(dir) {
    count += dir;
    if (count >= text.length) {
        count = 0;
    } else if (count < 0) {
        count = text.length - 1;
    }
    for (let i of text) {
        i.classList.remove('able');
    };
    text[count].classList.add('able')
    updateDots(count, left__dots);
}


//* General functions

function updateDots(index, dotsArr) {
    for (let dot of dotsArr) {
        dot.classList.remove('active');
    };

    dotsArr[index].classList.add('active');
};


//! Modal Window

let modal = document.querySelector('.modalWindow');
let button = document.querySelector('.button');
let close = document.querySelector('.fa-times-circle');

button.setAttribute('onclick', 'showModal()');

close.setAttribute('onclick', 'closeModal()');

modal.addEventListener('click', hideModal);

function showModal() {
    modal.classList.add('active');
};

function closeModal() {
    modal.classList.remove('active');
};

function hideModal(event) {
    if (event.target === modal) {
        closeModal();
    };
};