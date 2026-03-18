import React, { useEffect, useState } from "react";
import axios from "axios";

function Wallet() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");

  const API = "http://localhost:5000/api/wallet";

  const fetchBalance = async () => {
    const res = await axios.get(API);
    setBalance(res.data.balance);
  };

  const deposit = async () => {
    await axios.post(`${API}/deposit`, { amount: Number(amount) });
    fetchBalance();
  };

  const withdraw = async () => {
    await axios.post(`${API}/withdraw`, { amount: Number(amount) });
    fetchBalance();
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div>
      <h2>Balance: ${balance}</h2>

      <input
        type="number"
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>Withdraw</button>
    </div>
  );
}

export default Wallet;
