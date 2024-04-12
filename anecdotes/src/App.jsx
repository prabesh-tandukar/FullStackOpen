import { useState } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const MostVotes = (props) => {
  let highest = 0;
  const length = props.array.length;

  for (let index = 0; index < props.array.length; index++) {
    if (props.array[length] > highest) {
      highest = length;
    }
  }
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.array[highest].text}</p>
      <p>Has {props.array[highest].votes} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project make it later!",
    "The first 90 percent of the code acocunts for the first 90 percent of the development time...The remaining 10 percent of the code acocunts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go all",
  ];

  const initialAnecdotes = anecdotes.map((anecdote) => ({
    text: anecdote,
    votes: 0,
  }));
  const [anecdoteWithVotes, setAnecdoteWithVotes] = useState(initialAnecdotes);

  const handleVote = () => {
    const newAnecdotes = [...anecdoteWithVotes];
    newAnecdotes[selected].votes++;
    setAnecdoteWithVotes(newAnecdotes);
  };

  const [selected, setSelected] = useState(0);

  return (
    <>
      <div>{anecdoteWithVotes[selected].text}</div>
      <div>Has {anecdoteWithVotes[selected].votes} votes</div>
      <button onClick={handleVote}>Vote</button>
      <button onClick={() => setSelected(getRandomInt(8))}>
        next anecdote
      </button>
      <MostVotes array={anecdoteWithVotes} />
    </>
  );
};

export default App;
