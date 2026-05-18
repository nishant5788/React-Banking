function RequestLoan({ dispatch, isActive}) {
  return (
   <button
    disabled={!isActive}
      onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
    >
            Request Loan $5000
          </button>
  );
}

export default RequestLoan;
