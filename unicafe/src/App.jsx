import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Inline = ({ name, num }) => (
  <div>
    {name} {num}
  </div>
);

const Statistics = () => {
  return (
    <div>
      <h1>statistics</h1>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    console.log(good);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics />
      <Inline name="good" num={good}></Inline>
      <Inline name="neutral" num={neutral} />
      <Inline name="bad" num={bad} />
    </div>
  );
};

export default App;
