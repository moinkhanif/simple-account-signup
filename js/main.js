const form = document.querySelector('#sign-up-form');
const button = form.querySelector('button');

document.querySelectorAll('#sign-up-form label').forEach(labelTag => {
  const inputTag = labelTag.querySelector('input') ? labelTag.querySelector('input') : labelTag.querySelector('select');
  labelTag.addEventListener('change', () => labelTag.classList.add('focused'));
  labelTag.addEventListener('click', () => labelTag.classList.add('focused'));

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
      if (form.checkValidity()) {
        button.classList.remove('disabled')
      }
    }
  })
})

button.addEventListener('click', (e) => {
  e.preventDefault();
  const selectTag = document.querySelector('#sign-up-form select');
  console.log(selectTag.value)
  // if(selectTag.value){
  //   selectTag.classList.add('invalid');
  // }
})

