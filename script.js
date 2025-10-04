  let accountBalance = 1000;
  let cashBalance = 1000;
  let logBox = document.getElementById('logBox');

  function proceed() {
    const operation = document.getElementById('operation').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    if (operation === 'deposit') {
      cashBalance -= amount;
      accountBalance += amount;
    } else if (operation === 'withdraw') {
      if (accountBalance < amount) {
        alert("Not enough balance in account!");
        return;
      }
      cashBalance += amount;
      accountBalance -= amount;
    }

    document.getElementById('accountBalance').value = accountBalance;
    document.getElementById('cashBalance').value = cashBalance;

    logBox.innerHTML += `<br>${operation.toUpperCase()} ${amount}, Current account balance: ${accountBalance}, Current cash balance: ${cashBalance}`;
    logBox.scrollTop = logBox.scrollHeight;
  }

  function convert() {
    const input = parseFloat(document.getElementById('inputBalance').value);
    const currency = document.getElementById('currency').value;
    let output = 0;
    const rate = 36; // สมมุติอัตราแลกเปลี่ยน 1 USD = 36 THB

    if (isNaN(input)) {
      alert("Please enter a valid number!");
      return;
    }

    if (currency === 'USD') {
      output = input * rate;
    } else if (currency === 'THB') {
      output = input / rate;
    }

    document.getElementById('outputBalance').value = output.toFixed(2);
  }