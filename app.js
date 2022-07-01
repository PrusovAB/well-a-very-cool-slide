let activeSlideIndex = 0; // какой сейчас активный слайд.

const upBtn = document.querySelector('.up-button'); // получаем кнопки
const downBtn = document.querySelector('.down-button'); // получаем кнопки
const contaier = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar'); // получаем наш левую часть

const mainSlide = document.querySelector('.main-slide'); // получаем правую часть слайда


const slidesCount = mainSlide.querySelectorAll('div').length; // смотрим сколько слайдов в правой части


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`; //меняем стиль левой части 


upBtn.addEventListener('click', () => {
	changeSlide('up');
});


downBtn.addEventListener('click', () => {
	changeSlide('down');
});

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}

	}

	const height = contaier.clientHeight; // записываем высоту контейнера

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}