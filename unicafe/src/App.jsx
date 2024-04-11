import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Inline = ({ name, num }) => (
  <div>
    {name} {num}
  </div>
);

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <>
        <h1>statistics</h1>
        <div> No feedback given</div>
      </>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tr>
          <Inline name="good" num={props.good}></Inline>
        </tr>
        <tr>
          <Inline name="neutral" num={props.neutral} />
        </tr>
        <tr>
          <Inline name="bad" num={props.bad} />
        </tr>
        <tr>
          <Inline name="all" num={props.total}></Inline>
        </tr>
        <tr>
          <Inline
            name="average"
            num={(1 * props.good - 1 * props.bad) / props.total}
          />
        </tr>
        <tr>
          <Inline name="positive" num={props.good / props.total} />
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    console.log(good);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </div>
  );
};

export default App;
