import React, { useContext } from "react";
import CartStaus from "../Store/CartStore";
import useInput from "../../hooks/use-input";
import "./CheckOut.css";

const Check = () => {
  const ctx = useContext(CartStaus);

  const {
    inputData: nameValue,
    isInputValid: isNameCorrect,
    hasNoError: isNameValid,
    changeDataHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useInput((inputData) => inputData.trim() !== "");

  const {
    inputData: emailValue,
    isInputValid: isEmailCorrect,
    hasNoError: isEmailValid,
    changeDataHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput((inputData) => inputData.includes("@"));

  const {
    inputData: numberValue,
    isInputValid: isNumberCorrect,
    hasNoError: isNumberValid,
    changeDataHandler: numberChangeHandler,
    blurHandler: numberBlurHandler,
  } = useInput((inputData) => inputData.length === 10);

  const {
    inputData: addressValue,
    isInputValid: isAddressCorrect,
    hasNoError: isAddressValid,
    changeDataHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
  } = useInput((inputData) => inputData.trim() !== "");

  const {
    inputData: idValue,
    isInputValid: isIdCorrect,
    hasNoError: isIdValid,
    changeDataHandler: idChangeHandler,
    blurHandler: idBlurHandler,
  } = useInput((inputData) => inputData.trim() !== "");

  const submitFormHandler = async (event) => {
    event.preventDefault();

    const url = "" //Fireabse link
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: nameValue,
        address: addressValue,
        email: emailValue,
        contactNo: numberValue,
        id: idValue,
        order: ctx.cart,
      }),
    });

    response = await fetch(url);
    const data = response.json();
    alert("Order submitted successfully");
    ctx.reset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <h3>Check out</h3>
      <div>
        <label>Enter Your Name : </label>
        <input
          className={!isNameValid ? "input" : "input-invalid"}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
      </div>

      <div>
        <label>Enter Your Email : </label>
        <input
          className={!isEmailValid ? "input" : "input-invalid"}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
      </div>

      <div>
        <label>Enter Your Contact No : </label>
        <input
          className={!isNumberValid ? "input" : "input-invalid"}
          onChange={numberChangeHandler}
          onBlur={numberBlurHandler}
          value={numberValue}
        />
      </div>

      <div>
        <label>Enter Your Address: </label>
        <input
          className={!isAddressValid ? "input" : "input-invalid"}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
          value={addressValue}
        />
      </div>

      <div>
        <label>Enter Your Id number : </label>
        <input
          className={!isIdValid ? "input" : "input-invalid"}
          onChange={idChangeHandler}
          onBlur={idBlurHandler}
          value={idValue}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={ !isNameCorrect || !isAddressCorrect || !isEmailCorrect || !isIdCorrect || !isNumberCorrect}>Submit
        </button>
      </div>
    </form>
  );
};

export default Check;
