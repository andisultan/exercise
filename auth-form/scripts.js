'use strict';

const is_email_with_TLD = ( email ) => {
	return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(email);
};

const form_auth = document.forms['form_auth'];

const remove_error_class = ( elm ) => {
  elm.nextElementSibling.classList.add('form__label--filled');
  elm.parentElement.classList.remove('form__item--error');
}

const add_error_class = ( elm ) => {
  elm.parentElement.classList.add('form__item--error');
  elm.nextElementSibling.classList.add('form__label--filled');
}

const is_input_form_empty = () => {
  let username = form_auth.username.value.length;
  let email    = form_auth.email.value.length;
  let position = form_auth.position.value;
  let password = form_auth.password.value.length;

  if ( username  > 0 && email > 3 && position > 1 && password > 7 ) {
    form_auth.submit.removeAttribute('disabled');
  } else {
    form_auth.submit.setAttribute('disabled', 'true');
  }
}

const form_input_validate = ( selector ) => {
  if ( !selector ) return;

  selector.addEventListener( 'change', ( e ) => {
    let elm    = e.target;
    let value  = elm.value;
    let type   = elm.type;
    let name   = elm.name;
    let length = elm.value.length;

    if ( type !== 'password' && name !== 'password' && type !== 'email' && length > 0 ) {
      remove_error_class( elm );
    } else if ( ( type === 'password' || name === 'password' ) && length > 7 ) {
      remove_error_class( elm );
    }else if ( type === 'email' && is_email_with_TLD( value ) ) {
      remove_error_class( elm );
    }else {
      add_error_class( elm );
    }
  
    is_input_form_empty();
  });
}

form_input_validate( form_auth.username );
form_input_validate( form_auth.email );
form_input_validate( form_auth.password );
form_input_validate( form_auth.date );

form_auth.position.addEventListener( 'change', () => {
  is_input_form_empty();
});

document.querySelector('.form__toggle-type').addEventListener( 'click', ( e ) => {
  let password = form_auth.password;
  let icon     = e.target.firstChild;

  if ( password.type === 'password') {
    password.type  = 'text';
    icon.classList = 'icon-eye-off';
  } else {
    password.type  = 'password';
    icon.classList = 'icon-eye';
  }
} );