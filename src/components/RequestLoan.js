function RequestLoan({ dispatch, isActive, activeLoan}) {
  return (
   <button
    disabled={!isActive || activeLoan}
      onClick={() => dispatch({ type: "requestLoan" })}
    >
            Request Loan $5000
          </button>
  );
}

export default RequestLoan;
