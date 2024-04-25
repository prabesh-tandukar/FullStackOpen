const parts = [
  { name: "Fundamentals of React", exercises: 10, id: 1 },
  {
    name: "Using props to pass data",
    exercises: 7,
    id: 2,
  },
  {
    name: "State of a component",
    exercises: 14,
    id: 3,
  },
  {
    name: "Redux",
    exercises: 11,
    id: 4,
  },
];

const sum = parts.reduce((sum, part) => sum + part.exercises, 0);

console.log(sum);
