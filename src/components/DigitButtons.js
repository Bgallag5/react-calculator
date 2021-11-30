//button component to dispatch digits
import React from "react";
import { ADD_DIGIT } from "../reducers/actions";

export default function DigitButtons({ dispatch, digit }) {
  return (
    <button onClick={() => dispatch({ type: ADD_DIGIT, payload: {digit} })}>
      {digit}
    </button>
  );
}
