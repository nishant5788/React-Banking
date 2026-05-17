export default function App() {
  return (
    <main className="bank-app">
      <div className="bank-card">
        <header className="bank-header">
          <h1>🏦 React Bank</h1>
          <p>Manage your account with useReducer</p>
        </header>

        <section className="account-overview">
          <div className="overview-card">
            <span>Current Balance</span>
            <h2>$0</h2>
          </div>

          <div className="overview-card loan-card">
            <span>Active Loan</span>
            <h2>$0</h2>
          </div>
        </section>

        <section className="actions">
          <button className="primary-btn">
            Open Account
          </button>

          <button>
            Deposit $150
          </button>

          <button>
            Withdraw $50
          </button>

          <button>
            Request Loan $5000
          </button>

          <button>
            Pay Loan
          </button>

          <button className="danger-btn">
            Close Account
          </button>
        </section>
      </div>
    </main>
  );
}