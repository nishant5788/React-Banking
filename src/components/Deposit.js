function Deposit({ dispatch, isActive}) {
  return (
   <button
    disabled={!isActive}
      onClick={() => dispatch({ type: "deposit", payload: 150 })}
    >
      Deposit $150
    </button>
  );
}

export default Deposit;
