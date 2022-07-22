import { useState } from "react";

const useInput = (validation) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueCorrect = validation(enteredValue);
  const hasError = !enteredValueCorrect && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    error: hasError,
    valueIsCorrect: enteredValueCorrect,
    changeHandler: inputChangeHandler,
    blurHandler: inputBlurHandler,
    reset,
  };
};

export default useInput;
