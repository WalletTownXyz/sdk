let balance = 1000; // dummy saldo awal

exports.getWallet = (req, res) => {
  res.json({ balance });
};

exports.deposit = (req, res) => {
  const { amount } = req.body;
  balance += amount;
  res.json({ message: "Deposit success", balance });
};

exports.withdraw = (req, res) => {
  const { amount } = req.body;

  if (amount > balance) {
    return res.status(400).json({ message: "Insufficient balance" });
  }

  balance -= amount;
  res.json({ message: "Withdraw success", balance });
};
