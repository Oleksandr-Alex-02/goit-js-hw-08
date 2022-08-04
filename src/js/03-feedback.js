import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', valueForm);

const formData = {};
const pars = JSON.stringify(formData);

const ss = localStorage.setItem('dgdg', pars);
const ssss = localStorage.getItem('dgdg');
const ggg = JSON.parse(ssss);
console.log(ggg);

// localStorage.setItem(dataForm);

function valueForm(e) {
  formData[e.target.name] = e.target.value;
}

console.log(formData);
console.log();
