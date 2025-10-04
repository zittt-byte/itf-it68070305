    function updateBalance() {
      let acc = Number(document.getElementById("accountBalance").value);
      let cash = Number(document.getElementById("cashBalance").value);
      document.getElementById("history").value += `\nBalance updated -> Account: ${acc}, Cash: ${cash}`;
    }

    function deposit() {
      let amount = Number(document.getElementById("amount").value);
      let acc = Number(document.getElementById("accountBalance").value);
      let cash = Number(document.getElementById("cashBalance").value);

      acc += amount;
      cash -= amount;

      document.getElementById("accountBalance").value = acc;
      document.getElementById("cashBalance").value = cash;
      document.getElementById("history").value += `\nDeposited ${amount}, New Account: ${acc}, Cash: ${cash}`;
    }

    function withdraw() {
      let amount = Number(document.getElementById("amount").value);
      let acc = Number(document.getElementById("accountBalance").value);
      let cash = Number(document.getElementById("cashBalance").value);

      if (acc < amount) {
        alert("Not enough balance!");
        return;
      }

      acc -= amount;
      cash += amount;

      document.getElementById("accountBalance").value = acc;
      document.getElementById("cashBalance").value = cash;
      document.getElementById("history").value += `\nWithdrew ${amount}, New Account: ${acc}, Cash: ${cash}`;
    }