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
eval("\n\nconst form_auth = document.querySelector('#form_auth');\nconst form_element = form_auth.elements;\n\nfunction check_form_filled() {\n  if ( form_element.username.value.length > 3 \n    && form_element.email.value.length > 3 \n    && form_element.password.value.length > 7 \n  ) {\n    form_element.submit.removeAttribute('disabled');\n  }else {\n    form_element.submit.setAttribute('disabled', 'true');\n  }\n}\n\ndocument.addEventListener( 'change', function( e ) {\n  if ( e.target.type === 'text'     \n    || e.target.type === 'tel'\n    || e.target.type === 'email'\n    || e.target.type === 'number'\n    || e.target.type === 'password' \n  ) {\n\n    check_form_filled();\n\n    console.log(e.target.value.length);\n    \n    if( e.target.value.length > 0 ) {\n      e.target.nextElementSibling.classList.add('form__label--filled');\n      e.target.parentElement.classList.remove('form__item--error');\n    }\n    \n    if( e.target.value.length < 1 ) {\n      e.target.parentElement.classList.add('form__item--error');\n      e.target.nextElementSibling.classList.remove('form__label--filled');\n    }\n\n    if( e.target.type == 'password' && e.target.value.length < 8 ) {\n      e.target.parentElement.classList.add('form__item--error');\n    }\n\n  }\n});\n\n\n\nconst toogle_password = document.querySelector('.form__toggle-type');\n\ntoogle_password.addEventListener('click', function() {\n  const input = this.parentElement.children[\"password\"];\n  const input_type = input.getAttribute('type') === 'password' ? 'text' : 'password';\n  input.setAttribute('type', input_type); \n});\n\n\n//# sourceURL=webpack://auth-form/./scripts.js?");
/******/ })()
;