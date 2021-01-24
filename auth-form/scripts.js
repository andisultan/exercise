'use strict';

const form_auth = document.querySelector('#form_auth');
const form_element = form_auth.elements;

function check_form_filled() {
  if ( form_element.username.value.length > 3 
    && form_element.email.value.length > 3 
    && form_element.password.value.length > 7 
  ) {
    form_element.submit.removeAttribute('disabled');
  }else {
    form_element.submit.setAttribute('disabled', 'true');
  }
}

document.addEventListener( 'change', function( e ) {
  if ( e.target.type === 'text'     
    || e.target.type === 'tel'
    || e.target.type === 'email'
    || e.target.type === 'number'
    || e.target.type === 'password' 
  ) {

    check_form_filled();

    console.log(e.target.value.length);
    
    if( e.target.value.length > 0 ) {
      e.target.nextElementSibling.classList.add('form__label--filled');
      e.target.parentElement.classList.remove('form__item--error');
    }
    
    if( e.target.value.length < 1 ) {
      e.target.parentElement.classList.add('form__item--error');
      e.target.nextElementSibling.classList.remove('form__label--filled');
    }

    if( e.target.type == 'password' && e.target.value.length < 8 ) {
      e.target.parentElement.classList.add('form__item--error');
    }

  }
});



const toogle_password = document.querySelector('.form__toggle-type');

toogle_password.addEventListener('click', function() {
  const input = this.parentElement.children["password"];
  const input_type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', input_type); 
});
