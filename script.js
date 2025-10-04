function updateBalance() {
  let acc = Number(document.getElementById("accountBalance").value);
  let cash = Number(document.getElementById("cashBalance").value);

  if (acc < 0 || cash < 0) {
    alert("Balance cannot be negative!");
    return;
  }

  document.getElementById("history").value += `\nBalance updated -> Account: ${acc}, Cash: ${cash}`;
}

function deposit() {
  let amount = Number(document.getElementById("amount").value);
  let acc = Number(document.getElementById("accountBalance").value);
  let cash = Number(document.getElementById("cashBalance").value);

  if (amount <= 0) {
    alert("Please enter a positive amount!");
    return;
  }

  if (cash < amount) {
    alert("Not enough cash to deposit!");
    return;
  }

  acc += amount;
  cash -= amount;

  document.getElementById("accountBalance").value = acc;
  document.getElementById("cashBalance").value = cash;
  document.getElementById("history").value += `\nDeposited ${amount}, New Account: ${acc}, Cash: ${cash}`;
  document.getElementById("amount").value = '';
}

function withdraw() {
  let amount = Number(document.getElementById("amount").value);
  let acc = Number(document.getElementById("accountBalance").value);
  let cash = Number(document.getElementById("cashBalance").value);

  if (amount <= 0) {
    alert("Please enter a positive amount!");
    return;
  }

  if (acc < amount) {
    alert("Not enough balance in account!");
    return;
  }

  acc -= amount;
  cash += amount;

  document.getElementById("accountBalance").value = acc;
  document.getElementById("cashBalance").value = cash;
  document.getElementById("history").value += `\nWithdrew ${amount}, New Account: ${acc}, Cash: ${cash}`;
  document.getElementById("amount").value = '';
}
