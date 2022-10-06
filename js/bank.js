document.getElementById('btn-field').addEventListener('click', function () {
  if (
    document.getElementById('email-field').value === 'baperbank@gmail.com' &&
    document.getElementById('password-field').value === 'bapbeta'
  ) {
    window.location.href = 'bank.html';
  } else {
    alert('enter correct email and password');
  }
});
