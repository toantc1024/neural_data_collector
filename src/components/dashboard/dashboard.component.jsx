import { Fragment } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const list = localStorage.getItem("database");
  if (list === null) {
    return <p>There is no data</p>;
  }
  const parsedList = JSON.parse(list);
  return (
    <ul>
      {Object.keys(parsedList).map((key) => {
        const { arr, score } = parsedList[key];
        return (
          <li key={key}>
            <p>Session: {key}</p>
            <p>Rate: {`${(100 * score) / (arr.length / 2)}%`}</p>
            <p>Colors: {arr.join(", ")}</p>
          </li>
        );
      })}
    </ul>
  );
};
const Dashboard = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <List />
    </Fragment>
  );
};

export default Dashboard;
