document.addEventListener('DOMContentLoaded', () => {
  
  /** -------------------------------------------------------------
   * General Function
   * ------------------------------------------------------------- */
   
  /**
   * Check email validation
   * ex: john@domain.com = true, john@main = false
   * 
   * @param {string} email 
   */
  const isEemailWithTLD = (email) => /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/.test(email);


  /**
   * Remove class in element
   * 
   * @param {element} elm | e.target
   */
  const removeErrorClass = (elm) => {
    elm.nextElementSibling.classList.add('form__label--filled');
    elm.parentElement.classList.remove('form__item--error');
    if ( elm.type !== 'password' || elm.name !== 'password' ) {
      elm.parentElement.lastElementChild.setAttribute('aria-hidden', 'false');
    }
  };


  /**
   * Add class in element
   * 
   * @param {element} elm | e.target
   */
  const addErrorClass = (elm) => {
    elm.parentElement.classList.add('form__item--error');
    elm.nextElementSibling.classList.add('form__label--filled');
    console.log(elm.type);
    if ( elm.type !== 'password' || elm.name !== 'password' ) {
      elm.parentElement.lastElementChild.setAttribute('aria-hidden', 'true');
    }
  };


  /**
   * Check all input form is empty
   */
  const isInputFormEmpty = () => {
    const username = formAuth.username.value.length;
    const email = formAuth.email.value.length;
    const position = formAuth.position.value;
    const password = formAuth.password.value.length;

    if (username > 0 && email > 3 && position > 1 && password > 7) {
      formAuth.submit.removeAttribute('disabled');
    } else {
      formAuth.submit.setAttribute('disabled', 'true');
    }
  };


  /**
   * Checking input validation
   * 
   * @param {element} selector | class, id or html element
   */
  const formInputValidate = (selector) => {
    if (!selector) return;

    selector.addEventListener('change', (e) => {
      const elm = e.target;
      const { value } = elm;
      const { type } = elm;
      const { name } = elm;
      const { length } = elm.value;

      if (type !== 'password' && name !== 'password' && type !== 'email' && length > 0) {
        removeErrorClass(elm);
      } else if ((type === 'password' || name === 'password') && length > 7) {
        removeErrorClass(elm);
      } else if (type === 'email' && isEemailWithTLD(value)) {
        removeErrorClass(elm);
      } else {
        addErrorClass(elm);
      }

      isInputFormEmpty();
    });
  };



  /** -------------------------------------------------------------
   * Executions
   * ------------------------------------------------------------- */

  const formAuth = document.forms.form_auth;

  formInputValidate(formAuth.username);
  formInputValidate(formAuth.email);
  formInputValidate(formAuth.password);
  formInputValidate(formAuth.date);

  formAuth.position.addEventListener('change', () => {
    isInputFormEmpty();
  });

  document.querySelector('.form__toggle-type').addEventListener('click', (e) => {
    if (formAuth.password.type === 'password') {
      formAuth.password.type = 'text';
      e.target.firstChild.nextElementSibling.classList = 'icon-eye-off';
      e.target.setAttribute('aria-label', 'hide password');
    } else {
      formAuth.password.type = 'password';
      e.target.firstChild.nextElementSibling.classList = 'icon-eye';
      e.target.setAttribute('aria-label', 'show password');
    }
  });
  
});
