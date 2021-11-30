import React, { useReducer } from "react";
import { reducer } from "./reducers/reducers";
import DigitButtons from "./components/DigitButtons";
import OperationButtons from "./components/OperationButtons";


function App() {
  const [{ topDisplay, bottomDisplay, symbol }, dispatch] = useReducer(
    reducer,
    {}
  );

  console.log(topDisplay, bottomDisplay);

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="operation">
          {topDisplay} {symbol}
        </div>
        <div className="current-output">{bottomDisplay}</div>
      </div>
      <button className="span-two">Clear</button>
      <button>DEL</button>
      <OperationButtons symbol="÷" dispatch={dispatch} />
      <DigitButtons digit="1" dispatch={dispatch} />
      <DigitButtons digit="2" dispatch={dispatch} />
      <DigitButtons digit="3" dispatch={dispatch} />
      <OperationButtons symbol="*" dispatch={dispatch} />
      <DigitButtons digit="4" dispatch={dispatch} />
      <DigitButtons digit="5" dispatch={dispatch} />
      <DigitButtons digit="6" dispatch={dispatch} />
      <OperationButtons symbol="+" dispatch={dispatch} />
      <DigitButtons digit="7" dispatch={dispatch} />
      <DigitButtons digit="8" dispatch={dispatch} />
      <DigitButtons digit="9" dispatch={dispatch} />
      <OperationButtons symbol="-" dispatch={dispatch} />
      <DigitButtons digit="." dispatch={dispatch} />
      <DigitButtons digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
