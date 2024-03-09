const newRemEl = document.getElementById('new-rem');
const rootFontSizeStart = document.getElementById('root-font-size-start').value;
const rootFontSizeFinal = document.getElementById('root-font-size-final').value;

newRemEl.addEventListener('copy', function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    const copyNotice = document.getElementById('copy-notice');
    copyNotice.innerText = 'Copied to clipboard';
    // setTimeout(() => {
    //   copyNotice.innerText = '';
    // }, 2000);
  }
});

// newRemEl.onClick = function() {
//   document.execCommand('copy');
// }

function handleForm(form) {
  const value = Number(form['intial-rem'].value);
  const coeff = (rootFontSizeStart / rootFontSizeFinal);
  const result = value * coeff;
  newRemEl.innerText = result + 'rem';
  return false;
}