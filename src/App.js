import { Fragment } from "react";
import "./App.css";
import Score from "./components/score/score.component";
import Wrapper from "./components/wrapper/wrapper.component";
import Dashboard from "./components/dashboard/dashboard.component";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  const updateCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <Score count={count}></Score>
            <Wrapper count={count} updateCount={updateCount}></Wrapper>
            <Link to="dashboard">Dashboard</Link>
          </Fragment>
        }
      ></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
