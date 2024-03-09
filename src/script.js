const newRemEl = document.getElementById('new-rem');
const rootFontSizeStart = document.getElementById('rootFontSizeStart').value;
const rootFontSizeFinal = document.getElementById('rootFontSizeFinal').value;

function handleForm(form) {
  const value = Number(form['initialRem'].value);
  const coeff = (rootFontSizeStart / rootFontSizeFinal);
  const result = value * coeff;
  if (result) {
    newRemEl.innerText = result + 'rem';
  }
  return false;
}