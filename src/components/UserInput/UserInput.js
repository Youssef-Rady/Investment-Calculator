import { useState } from "react";
import './UserInput.css';

function UserInput(props) {
  // const [currentSavings, setCurrentSavings] = useState('');
  // const [yearlySavings, setYearlySavings] = useState('');
  // const [expectedlySavings, setExpectedSavings] = useState('');
  // const [savingDuration, setSavingDuration] = useState('');
  const initailUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(initailUserInput)

  function submitHandler(event) {
    event.preventDefault();

    props.onCalculate(userInput);
  }

  function resetHandler() {
    setUserInput(initailUserInput);
  }

  function inputChangeHandler(input, value) {
    // if (input == 'current-savings') {
    //   setCurrentSavings(value);
    // }
    // else if (input == 'yearly-contribution') {
    //   setYearlySavings(value);
    // }
    // else if (input == 'expected-return') {
    //   setExpectedSavings(value);
    // }
    // else if (input == 'duration') {
    //   setSavingDuration(value);
    // }
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value, //we put the input in [] because we want the value of the key input not the key name itself
      };
    })
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={(event) => { inputChangeHandler('current-savings', event.target.value) }} value={userInput['current-savings']} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={(event) => { inputChangeHandler('yearly-contribution', event.target.value) }} value={userInput['yearly-contribution']} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={(event) => { inputChangeHandler('expected-return', event.target.value) }} value={userInput['expected-return']} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={(event) => { inputChangeHandler('duration', event.target.value) }} value={userInput["duration"]} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;