'use strict';

const is_email_with_TLD = ( email ) => {
	return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(email);
};

const form_auth = document.forms['form_auth'];

const remove_error__class = ( e ) => {
  e.target.nextElementSibling.classList.add('form__label--filled');
  e.target.parentElement.classList.remove('form__item--error');
}

const add_error__class = ( e ) => {
  e.target.parentElement.classList.add('form__item--error');
  e.target.nextElementSibling.classList.add('form__label--filled');
}

const is_input_empty = () => {
  if ( form_auth.username.value.length  > 1 &&
    form_auth.email.value.length > 1 &&
    form_auth.position.value > 1 &&
    form_auth.password.value.length > 7
  ) {
    form_auth.submit.removeAttribute('disabled');
  } else {
    form_auth.submit.setAttribute('disabled', 'true');
  }
}

const form_input_validate = ( selector ) => {
  if ( !selector ) {
    return;
  }
  
  selector.addEventListener( 'change', ( e ) => {
    if ( e.target.type !== 'password' && e.target.type !== 'email' && e.target.value !== '' ) {
      remove_error__class( e );
    } else if ( e.target.type === 'password' && e.target.value.length > 7 ) {
      remove_error__class( e );
    }else if ( e.target.type === 'email' && is_email_with_TLD( e.target.value ) ) {
      remove_error__class( e );
    }else {
      add_error__class(e);
    }
  
    is_input_empty();
  });
}

form_input_validate(form_auth.username);
form_input_validate(form_auth.email);
form_input_validate(form_auth.password);
form_input_validate(form_auth.date);

form_auth.position.addEventListener( 'change', () => {
  is_input_empty();
});

document.querySelector('.form__toggle-type').addEventListener( 'click', ( e ) => {
  if ( form_auth.password.type === 'password') {
    form_auth.password.type = 'text';
    e.target.firstChild.classList = 'icon-eye-off';
  } else {
    form_auth.password.type = 'password';
    e.target.firstChild.classList = 'icon-eye';
  }
});