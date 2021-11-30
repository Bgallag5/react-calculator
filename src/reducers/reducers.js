import {
  ADD_OPERATION,
  CALCULATE,
  CLEAR,
  DELETE_DIGIT,
  ADD_DIGIT,
} from "./actions";

//take in some state, and return updated state
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_DIGIT:
      //prevent adding more than one '.'
      if (payload.digit === "." && state.bottomDisplay != null) {
        if ([...state.bottomDisplay].includes(".")) return state;
        return {
          ...state,
          bottomDisplay: `${state.bottomDisplay || ""}${payload.digit}`,
        };
      }
      return {
        ...state,
        bottomDisplay: `${state.bottomDisplay || ""}${payload.digit}`,
      };
    case ADD_OPERATION:
      // == null returns true for both null AND undefined values
      if (state.topDisplay == null && state.bottomDisplay == null) {
        return state;
      }
      if (state.bottomDisplay == null) {
        return {
          ...state,
          symbol: payload.symbol,
        };
      }
      if (state.topDisplay == null) {
        return {
          ...state,
          topDisplay: state.bottomDisplay,
          bottomDisplay: null,
          symbol: payload.symbol,
        };
      }
      //if value in topDisplay: run calculation
      return {
        ...state,
        topDisplay: calculate(state),
        symbol: payload.symbol,
        bottomDisplay: "",
      };
    case CLEAR:
      return {
        ...state,
        symbol: null,
        topDisplay: null,
        bottomDisplay: null,
      };
    case CALCULATE:
      if (!state.topDisplay || !state.bottomDisplay) return state;

      return {
        ...state,
        bottomDisplay: calculate(state),
        topDisplay: null,
        symbol: null,
      };
    case DELETE_DIGIT:
      if (state.bottomDisplay == null) return state;
      // spread and loop over current bottomVal and remove the last digit, then return as new bottomVal
      const newVal = [...state.bottomDisplay].slice(0, -1).join("");
      return {
        ...state,
        bottomDisplay: newVal,
      };
    default:
      return state;
  }
};

function calculate(state) {
  let topValue = parseFloat(state.topDisplay);
  let bottomValue = parseFloat(state.bottomDisplay);
  //return calculated value as a string
  switch (state.symbol) {
    case "+":
      return (topValue + bottomValue).toString();
    case "-":
      return (topValue - bottomValue).toString();
    case "*":
      return (topValue * bottomValue).toString();
    case "÷":
      return (topValue / bottomValue).toString();
    default:
      return state;
  }
}
