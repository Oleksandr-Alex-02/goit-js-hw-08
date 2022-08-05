import { save, parse, removeKey } from './storage.js';
// import throttle from 'lodash.throttle';

const formData = {};
console.log(formData);

const form = document.querySelector('.feedback-form');

form.addEventListener('input', function (e) {
  formData[e.target.name] = e.target.value;
  save('feedback-form-state', JSON.stringify(formData));
  localStorageValue();
});
console.log(parse('feedback-form-state'));
// localStorage

function localStorageValue() {
  try {
    return parse('feedback-form-state') === null
      ? undefined
      : console.log('10');
  } catch (error) {
    console.error('Get state error: ', error.message);
  }

  console.log(parse('feedback-form-state'));
}

// SABMIT;

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return;
    alert('Please fill in all the fields!');
  }
  removeKey('feedback-form-state');
  const formData = new FormData(form);
  const valuesFotm = Object.fromEntries(formData.entries());
  console.log(valuesFotm);
  e.currentTarget.reset();
}
