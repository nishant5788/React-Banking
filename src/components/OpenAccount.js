function OpenAccount({ dispatch, isActive}) {
  return (
    <button
    disabled={isActive}
      className="primary-btn"
      onClick={() => dispatch({ type: "openAccount" })}
    >
      Open Account
    </button>
  );
}

export default OpenAccount;
