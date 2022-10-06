document.getElementById('btn-deposit').addEventListener('click', function () {
  const previousDeposit = parseFloat(
    document.getElementById('deposit').innerText
  );
  const currentDepositField = document.getElementById('deposit-field');
  const currentDeposit = parseFloat(currentDepositField.value);
  currentDepositField.value = '';
  if (currentDeposit < 0 || isNaN(currentDeposit)) {
    alert('Invalid Input!Pleaseprovide a valid number');
    return;
  }
  const totalDeposit = previousDeposit + currentDeposit;
  document.getElementById('deposit').innerText = totalDeposit;
  const previousBalanceField = document.getElementById('balance-field');
  const previousBalance = parseFloat(previousBalanceField.innerText);
  const totalBalance = currentDeposit + previousBalance;
  previousBalanceField.innerText = totalBalance;
});
