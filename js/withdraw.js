document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawField = document.getElementById('withdraw');
  const currentWithdrawfield = document.getElementById('withdraw-field').value;

  const previousBalanceField = document.getElementById('balance-field');
  const previousBalance = parseFloat(previousBalanceField.innerText);
  document.getElementById('withdraw-field').value = '';
  if (
    parseFloat(currentWithdrawfield) < 0 ||
    currentWithdrawfield > previousBalance ||
    isNaN(parseFloat(currentWithdrawfield))
  ) {
    alert('Invalid Input!Please provide a valid number');
    return;
  }
  const currentWithdraw = (withdrawField.innerText =
    parseFloat(currentWithdrawfield) + parseFloat(withdrawField.innerText));

  const totalBalance = previousBalance - parseFloat(currentWithdrawfield);
  previousBalanceField.innerText = totalBalance;
});
