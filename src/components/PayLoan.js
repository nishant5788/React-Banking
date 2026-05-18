function PayLoan({ dispatch, isActive, balance}) {
  return (
   <button
    disabled={!isActive && balance > 5000}
      onClick={() => dispatch({ type: "payLoan" })}
    >
            Pay Loan
          </button>
  );
}

export default PayLoan;
