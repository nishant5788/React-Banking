function Balance({balance}) {
  return (
   <div className="overview-card">
            <span>Current Balance</span>
            <h2>${balance}</h2>
          </div>
  );
}

export default Balance;
