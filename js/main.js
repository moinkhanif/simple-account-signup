const form = document.querySelector('#sign-up-form');
const button = form.querySelector('button');

document.querySelectorAll('#sign-up-form label').forEach(labelTag => {
  const inputTag = labelTag.querySelector('input') ? labelTag.querySelector('input') : labelTag.querySelector('select');
  inputTag.addEventListener('focus', () => labelTag.classList.add('focused'));
  inputTag.addEventListener('change', () => labelTag.classList.add('focused'));
  labelTag.addEventListener("focusout", () => {
    if (inputTag.value.length === 0) {
      labelTag.classList.remove('focused');
      labelTag.classList.remove('invalid');
    } else {
      if (!inputTag.validity.valid) {
        labelTag.classList.add('invalid');
      } else {
        labelTag.classList.remove('invalid');
      }
    }
  })
})

form.addEventListener('change', (e) => {
  if (form.checkValidity()) {
    button.classList.remove('disabled')
  }
})
