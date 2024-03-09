const resultElement = document.getElementById('new-rem');
const rootFontSizeStart = document.getElementById('rootFontSizeStart')?.value;
const rootFontSizeFinal = document.getElementById('rootFontSizeFinal')?.value;
const alert = document.getElementById('alert-result');
const alertContent = document.getElementById('alert-content')

function handleForm(form) {
  const value = Number(form['initialRem'].value);
  const coeff = (rootFontSizeStart / rootFontSizeFinal);
  const result = value * coeff;

  if (result) {
    const resultRem = result + 'rem';
    displayResult(resultRem);
    copyText(resultRem);

    const alertContent = `<strong>${resultRem}</strong> has been copied to your clipboard`;
    displayAlert(alertContent)
  }
  return false;
}

function copyText(value) {
  if (value) {
    navigator.clipboard.writeText(value);
  }
}

function displayResult(result) {
  resultElement.classList.remove('display-none');
  resultElement.removeAttribute('hidden');
  resultElement.innerText = result;
}

function displayAlert(content) {
  alert.classList.remove('display-none');
  alert.removeAttribute('hidden');

  alertContent.innerHTML = content;
}

function handleKeypress() {
  alert.classList.add('display-none');
  alert.setAttribute('hidden', true);

  alertContent.innerHTML = null;

  resultElement.classList.add('display-none');
  resultElement.setAttribute('hidden', true);
  resultElement.innerText = null;
}