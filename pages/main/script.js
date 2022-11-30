'use strict';

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


