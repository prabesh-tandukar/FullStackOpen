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

const Course = (props) => {
  return (
    <>
      <Header heading={props.heading} />
      <SubHeader course={props.course[0].name}></SubHeader>
      <Content
        part1={props.course[0].parts[0].name}
        exercises1={props.course[0].parts[0].exercises}
        part2={props.course[0].parts[1].name}
        exercises2={props.course[0].parts[1].exercises}
        part3={props.course[0].parts[2].name}
        exercises3={props.course[0].parts[2].exercises}
        part4={props.course[0].parts[3].name}
        exercises4={props.course[0].parts[3].exercises}
      />
      <Total parts={props.course[0].parts} />
      <SubHeader course={props.course[1].name}></SubHeader>
      <Content
        part1={props.course[1].parts[0].name}
        exercises1={props.course[1].parts[0].exercises}
        part2={props.course[1].parts[1].name}
        exercises2={props.course[0].parts[1].exercises}
      />
      <Total parts={props.course[1].parts} />
    </>
  );
};

export default Course;
