/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./scripts.js ***!
  \********************/
eval("\n\nconst is_email_with_TLD = ( email ) => {\n\treturn /^([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22)(\\x2e([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22))*\\x40([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x5d)(\\x2e([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x5b([^\\x0d\\x5b-\\x5d\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x5d))*(\\.\\w{2,})+$/.test(email);\n};\n\nconst form_auth = document.forms['form_auth'];\n\nconst remove_error_class = ( elm ) => {\n  elm.nextElementSibling.classList.add('form__label--filled');\n  elm.parentElement.classList.remove('form__item--error');\n}\n\nconst add_error_class = ( elm ) => {\n  elm.parentElement.classList.add('form__item--error');\n  elm.nextElementSibling.classList.add('form__label--filled');\n}\n\nconst is_input_form_empty = () => {\n  let username = form_auth.username.value.length;\n  let email    = form_auth.email.value.length;\n  let position = form_auth.position.value;\n  let password = form_auth.password.value.length;\n\n  if ( username  > 0 && email > 3 && position > 1 && password > 7 ) {\n    form_auth.submit.removeAttribute('disabled');\n  } else {\n    form_auth.submit.setAttribute('disabled', 'true');\n  }\n}\n\nconst form_input_validate = ( selector ) => {\n  if ( !selector ) return;\n\n  selector.addEventListener( 'change', ( e ) => {\n    let elm    = e.target;\n    let value  = elm.value;\n    let type   = elm.type;\n    let name   = elm.name;\n    let length = elm.value.length;\n\n    if ( type !== 'password' && name !== 'password' && type !== 'email' && length > 0 ) {\n      remove_error_class( elm );\n    } else if ( ( type === 'password' || name === 'password' ) && length > 7 ) {\n      remove_error_class( elm );\n    }else if ( type === 'email' && is_email_with_TLD( value ) ) {\n      remove_error_class( elm );\n    }else {\n      add_error_class( elm );\n    }\n  \n    is_input_form_empty();\n  });\n}\n\nform_input_validate( form_auth.username );\nform_input_validate( form_auth.email );\nform_input_validate( form_auth.password );\nform_input_validate( form_auth.date );\n\nform_auth.position.addEventListener( 'change', () => {\n  is_input_form_empty();\n});\n\ndocument.querySelector('.form__toggle-type').addEventListener( 'click', ( e ) => {\n  let password = form_auth.password;\n  let icon     = e.target.firstChild;\n\n  if ( password.type === 'password') {\n    password.type  = 'text';\n    icon.classList = 'icon-eye-off';\n  } else {\n    password.type  = 'password';\n    icon.classList = 'icon-eye';\n  }\n} );\n\n//# sourceURL=webpack://auth-form/./scripts.js?");
/******/ })()
;