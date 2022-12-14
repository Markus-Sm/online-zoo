function limit(element)
{
    var max_chars = 4;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}

const donateInput = document.querySelector('.donate__input')
const amount = document.querySelectorAll('.pay__bar-input');
const donateForm = document.querySelector('.donate__form');

function limitCharacter(){
    if (donateInput.value.length > 4) {
        donateInput.value = donateInput.value.slice(0, 4);
    };
    donateInput.value = donateInput.value.replace(/[e,+,-,',','.']/g, '');
}

function checkedAmount(){
    for (let i = 0; i < amount.length; i++) {
        if (amount[i].checked) {
            donateInput.value = amount[i].value;
            break
        };
    };
}

function checkedDonateInput(){
    for(let i = 0; i < amount.length; i++){
        if(donateInput.value === amount[i].value){
            amount[i].checked = true;
        }else{
            amount[i].checked = false;
        }
    }
}

function defaultInput() {
    donateInput.value = amount[5].value;
};

donateInput.addEventListener('input', checkedDonateInput);
donateForm.addEventListener('click', checkedAmount);
donateInput.addEventListener('input', limitCharacter);
window.addEventListener('load', defaultInput);



