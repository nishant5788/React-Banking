function CloseAccount({ dispatch, isActive}) {
  return (
   <button
    disabled={!isActive}
      onClick={() => dispatch({ type: "closeAccount"})}
    >
            Close Account
          </button>
  );
}

export default CloseAccount;
