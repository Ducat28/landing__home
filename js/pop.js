const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');



openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

// ------------------------------------------------
const openPopUpa = document.getElementById('open_pop_upa');
const closePopUpa = document.getElementById('pop_up_closea');
const popUpa = document.getElementById('pop_upa');



openPopUpa.addEventListener('click', function(e){
 e.preventDefault();
 popUpa.classList.add('active');
})

closePopUpa.addEventListener('click', () => {
 popUpa.classList.remove('active');
})

// -------------------------------------
const openPopUpb = document.getElementById('open_pop_upb');
const closePopUpb = document.getElementById('pop_up_closeb');
const popUpb = document.getElementById('pop_upb');



openPopUpb.addEventListener('click', function(e){
 e.preventDefault();
 popUpb.classList.add('active');
})

closePopUpb.addEventListener('click', () => {
 popUpb.classList.remove('active');
})