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
  loanAmount: 0,
  activeLoan: false
};

const LOAN_VALUE = 5000;

function reducer(state, action) {

  switch(action.type) {

    case "openAccount": 
    return {
        ...state, 
        isActive: true
      };

      case "deposit": 
      return {
        ...state, 
        balance: state.balance + 150
      };

      case "withdraw": 
      return {
        ...state, 
        balance: state.balance - 50
      };

      case "requestLoan": 
      return {
        ...state, 
        balance: state.balance + LOAN_VALUE,
        activeLoan: true,
        loanAmount: LOAN_VALUE
      };

      case "payLoan": 
      return {
        ...state, 
        balance: state.balance - LOAN_VALUE,
        activeLoan: false,
        loanAmount: 0
      };

      case "closeAccount": 
      return {
        ...initialState
      };

      default: 
      throw new Error("Action unknown!");

  }

}

export default function App() {
  const [{balance, activeLoan, loanAmount, isActive}, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="bank-app">
      <div className="bank-card">
        <Header />

        <section className="account-overview">
          <Balance balance={balance} />

          <Loan loanAmount={loanAmount} />
        </section>

        <section className="actions">
          <OpenAccount dispatch={dispatch} isActive={isActive} />

          <Deposit dispatch={dispatch} isActive={isActive} />

          <Withdraw dispatch={dispatch} isActive={isActive} />

          <RequestLoan activeLoan={activeLoan} dispatch={dispatch} isActive={isActive} />

          <PayLoan balance={balance} dispatch={dispatch} isActive={isActive} />

          <CloseAccount dispatch={dispatch} isActive={isActive} />
        </section>
      </div>
    </main>
  );
}
