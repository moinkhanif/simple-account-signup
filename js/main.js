document.querySelectorAll('#sign-up-form label').forEach(labelTag => {
  const inputTag = labelTag.querySelector('input');
  labelTag.addEventListener('change', () => labelTag.classList.add('focused'));
  labelTag.addEventListener('click', () => labelTag.classList.add('focused'));

  labelTag.addEventListener("focusout", () => {
    if(inputTag.value.length === 0) {
      labelTag.classList.remove('focused');
      labelTag.classList.remove('invalid');
    } else {
      if(!inputTag.validity.valid) {
        labelTag.classList.add('invalid');
      } else {
        labelTag.classList.remove('invalid');
      }
      const form = document.querySelector('#sign-up-form');
      if(form.checkValidity()) {
        const button = form.querySelector('button[type="submit"]');
        button.disabled = false;
      }
    }
  })
})