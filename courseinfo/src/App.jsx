const Header = (props) => {
  return (
    <>
      <h1>{props.heading}</h1>
    </>
  );
};

const SubHeader = (props) => {
  return (
    <>
      <h2>{props.course}</h2>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
      <Part part={props.part4} exercises={props.exercises4} />
    </>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p>
        <strong>total of {totalExercises} exercises </strong>
      </p>
    </>
  );
};

const App = () => {
  const heading = "Web development curriculum";
  const course = [
    {
      id: 1,
      name: "Half Stack application developments",
      parts: [
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
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <Header heading={heading} />
      <SubHeader course={course[0].name}></SubHeader>
      <Content
        part1={course[0].parts[0].name}
        exercises1={course[0].parts[0].exercises}
        part2={course[0].parts[1].name}
        exercises2={course[0].parts[1].exercises}
        part3={course[0].parts[2].name}
        exercises3={course[0].parts[2].exercises}
        part4={course[0].parts[3].name}
        exercises4={course[0].parts[3].exercises}
      />
      <Total parts={course[0].parts} />
      <SubHeader course={course[1].name}></SubHeader>
      <Content
        part1={course[1].parts[0].name}
        exercises1={course[1].parts[0].exercises}
        part2={course[1].parts[1].name}
        exercises2={course[0].parts[1].exercises}
      />
      <Total parts={course[1].parts} />
    </>
  );
};

export default App;
