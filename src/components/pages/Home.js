import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Createtask from "../modals/createtask";

const Home = () => {
  const [modal, setModal] = useState(false);

  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div className="header text-center">
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>

      <Createtask />
    </>
  );
};

export default Home;
