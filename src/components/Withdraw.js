function Withdraw({ dispatch, isActive}) {
  return (
   <button
    disabled={!isActive}
      onClick={() => dispatch({ type: "withdraw", payload: 50 })}
    >
      Withdraw $50
    </button>
  );
}

export default Withdraw;
