import React, { useEffect, useState } from 'react';
import { getBalance } from '../services/api';

function Dashboard() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      const { data } = await getBalance();
      setBalance(data.balance);
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <h2>Wallet Balance: ₹{balance}</h2>
    </div>
  );
}

export default Dashboard;
