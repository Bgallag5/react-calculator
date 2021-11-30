//button component to dispatch operations
import React from "react";
import { ADD_OPERATION } from "../reducers/actions";

export default function OperationButtons({ dispatch, symbol }) {
  return (
    <button onClick={() => dispatch({ type: ADD_OPERATION , payload: {symbol} })}>
      {symbol}
    </button>
  );
}
