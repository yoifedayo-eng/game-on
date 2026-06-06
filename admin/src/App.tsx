import React from 'react';
import './App.css';

function App() {
  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>🎮 Game On Admin Dashboard</h1>
        <p>User & Payment Management</p>
      </header>

      <div className="admin-grid">
        <div className="card">
          <h2>Users</h2>
          <p className="stat">0</p>
          <p>Total Registered</p>
        </div>
        <div className="card">
          <h2>Revenue</h2>
          <p className="stat">₦0</p>
          <p>Platform Fees</p>
        </div>
        <div className="card">
          <h2>Active Games</h2>
          <p className="stat">0</p>
          <p>Right Now</p>
        </div>
        <div className="card">
          <h2>Tournaments</h2>
          <p className="stat">0</p>
          <p>Running</p>
        </div>
      </div>

      <div className="section">
        <h2>Recent Transactions</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>User</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} style={{textAlign: 'center', padding: '20px'}}>No transactions yet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
