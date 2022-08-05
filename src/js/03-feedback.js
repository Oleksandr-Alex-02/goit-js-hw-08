import { save, getItemKey, removeKey } from './storage.js';
import throttle from 'lodash.throttle';
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', function (e) {
  formData[e.target.name] = e.target.value;
  throttle(save, 500)(FEEDBACK_FORM_STATE, JSON.stringify(formData));
});
// localStorage

localStorageValue();

function localStorageValue() {
  const proverka = getItemKey(FEEDBACK_FORM_STATE);
  if (proverka) {
    if (proverka.email) {
      form.email.value = proverka.email;
    }
    if (proverka.message) {
      form.message.value = proverka.message;
    }
  }
}

// SABMIT;

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  removeKey(FEEDBACK_FORM_STATE);
  const formData = new FormData(form);
  const valuesFotm = Object.fromEntries(formData.entries());
  e.currentTarget.reset();
}
