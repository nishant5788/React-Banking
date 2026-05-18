function Balance({loanAmount}) {
  return (
   <div className="overview-card loan-card">
            <span>Active Loan</span>
            <h2>${loanAmount}</h2>
          </div>
  );
}

export default Balance;
