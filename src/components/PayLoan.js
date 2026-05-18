function PayLoan({ dispatch, isActive}) {
  return (
   <button
   disabled={!isActive}
      onClick={() => dispatch({ type: "payLoan" })}
    >
            Pay Loan
          </button>
  );
}

export default PayLoan;
