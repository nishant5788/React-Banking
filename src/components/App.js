import { useReducer } from "react";
import Header from "./Header";
import Balance from "./Balance";
import Loan from "./Loan";
import OpenAccount from "./OpenAccount";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import RequestLoan from "./RequestLoan";
import PayLoan from "./PayLoan";
import CloseAccount from "./CloseAccount";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {

  if(!state.isActive && action.type !== 'openAccount') return state;

  switch(action.type) {

    case "openAccount": 
    return {
        ...state, 
        isActive: true,
        balance: 500
      };

      case "deposit": 
      return {
        ...state, 
        balance: state.balance + action.payload
      };

      case "withdraw": 
      return {
        ...state, 
        balance: state.balance - action.payload
      };

      case "requestLoan": 
      if(state.loan > 0) return state;
      return {
        ...state, 
        balance: state.balance + action.payload,
        loan: action.payload
      };

      case "payLoan": 
      return {
        ...state, 
        balance: state.balance - state.loan,
        loan: 0
      };

      case "closeAccount": 
      if(state.loan > 0 || state.balance !== 0) return state;
      return {
        ...initialState
      };

      default: 
      throw new Error("Action unknown!");

  }

}

export default function App() {
  const [{balance, activeLoan, loan, isActive}, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="bank-app">
      <div className="bank-card">
        <Header />

        <section className="account-overview">
          <Balance balance={balance} />

          <Loan loan={loan} />
        </section>

        <section className="actions">
          <OpenAccount dispatch={dispatch} isActive={isActive} />

          <Deposit dispatch={dispatch} isActive={isActive} />

          <Withdraw dispatch={dispatch} isActive={isActive} />

          <RequestLoan dispatch={dispatch} isActive={isActive} />

          <PayLoan dispatch={dispatch} isActive={isActive} />

          <CloseAccount dispatch={dispatch} isActive={isActive} />
        </section>
      </div>
    </main>
  );
}
