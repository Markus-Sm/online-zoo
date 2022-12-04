'use strict';

/* mobile navigation */

const modalWindow = document.querySelector('.modal__window');
const closeModalWindow = document.querySelector('.close__modal__window')
const burger = document.querySelector('.burger')

const openModal = function(){
    modalWindow.classList.remove('hidden')
}

const closeModal = function(){
    modalWindow.classList.add('hidden')
}

burger.addEventListener('click', openModal);
closeModalWindow.addEventListener('click', closeModal)

/* ========================= */
/* pets carousel */
/* ========================= */

var sliderMain = document.getElementById('slider-main');
var item = sliderMain.getElementsByClassName('pet__card');

var sliderMain_2 = document.getElementById('slider-main-2');
var item_2 = sliderMain_2.getElementsByClassName('pet__card-2');

let arrowLeft = document.querySelector('.left');
let arrowRight = document.querySelector('.right');

function next(){
    sliderMain.append(item[0]);
    sliderMain_2.append(item_2[0]);
}

function prev(){
    sliderMain.prepend(item[item.length-1]);
    sliderMain_2.prepend(item_2[item_2.length-1]);
}

arrowLeft.addEventListener("click", prev)
arrowRight.addEventListener("click", next)

/* ========================= */
/* testimonials range slider */
/* ========================= */

const sliderRange = document.querySelector('.slider-progress');

const cards__wrapper = document.querySelector('.square__wrap_6');
const cards__item = cards__wrapper.getElementsByClassName('square__testimonials')

sliderRange.oninput = function(){

    // for(let i = 0; i <= this.value; i++){
    //     cards__wrapper.append(cards__item[0]);
    // }

    if(this.value == 0){
        cards__wrapper.append(cards__item[0])
    }else if(this.value == 1){
        cards__wrapper.append(cards__item[0])
    }else if(this.value == 2){
        cards__wrapper.append(cards__item[0])
    }else if(this.value == 3){
        cards__wrapper.append(cards__item[0])
    }else if(this.value == 4){
        cards__wrapper.append(cards__item[0])
    }else if(this.value == 5){
        cards__wrapper.append(cards__item[0])
    }else if(this.value == 6){
        cards__wrapper.append(cards__item[0])
    }else if(this.value == 7){
        cards__wrapper.append(cards__item[0])
    }
}

/* ========================= */
/* Popup Testimonials*/
/* ========================= */

const catalog_testimonial_cards = document.getElementById('catalog_testimonials');

const markup = testimonials.reduce((acc, value) => {

    return `
    <div class="square__testimonials id=testimonials-card-id-${value.id}">
        <div class="testimonials__header">
            <div class="header__left"><img src="${value.img}" alt="user img"></div>
                <div class="header__right">
                <h4 class="header-6">${value.author}</h4>
                <p>${value.location} › ${value.day}</p>
            </div>
        </div>

        <div class="testimonials__text">
            <p>${value.commend}</p>
        </div>
        <div class="modal hidden">
                    <img src="../../assets/icons/x_modal.png" alt="x icon" class="modal-x">
                    <div class="modals__card">
                        <div class="testimonials__header">
                            <div class="header__left"><img src="${value.img}" alt="user img"></div>
                            <div class="header__right">
                                <h4 class="header-6">${value.author}</h4>
                                <p>${value.location} › ${value.day}</p>
                            </div>
                        </div>
            
                        <div class="testimonials__text">
                            <p>${value.commend}</p>
                        </div>
                    </div>
                </div>
    </div>
    `.concat(acc);
}, '');

catalog_testimonial_cards.innerHTML = markup;

const card_testimonials = document.querySelectorAll(".square__testimonials");
const modal_card = document.querySelectorAll('.modal')
const overlay_1 = document.querySelector('.overlay1');
const close__modal = document.querySelectorAll('.modal-x')

function openModalTestimonial(e){
    e.target.nextElementSibling.nextElementSibling.classList.remove('hidden')
    overlay_1.classList.remove('hidden')
}

function closeModalTestimonial(e){    
    e.target.parentElement.classList.add('hidden');
    overlay_1.classList.add('hidden');
}

card_testimonials.forEach(card => {
    card.addEventListener('click', openModalTestimonial);
})

close__modal.forEach(x => {
    x.addEventListener('click', closeModalTestimonial)
})