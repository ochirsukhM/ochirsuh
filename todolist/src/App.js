import React, { useState } from "react";

import "./App.css";
// import LightSwitch from "./components/Light";
import Modal from "./components/Modal";
// import Signup from "./components/Signup";
// import Toolbar from "./components/Toolbar";
import Todolist from "./components/Todolist";

//id, title, isDone
function App() {
  const init={
    id:"",
    task:"",
    type:0,
    isImportant:false,
    isDone:false,
  }

  const [task, setTask] = useState(""); // input
  const [tasks, setTasks] = useState([]);
  const [ID, setId] = useState("0");
  const [modal, setModal] = useState(false);
  const [doneTotal, setDoneTotal] = useState(0);
  const [taskObj,setTaskObj] = useState(init)

  const addTask = () => {
    // const newObj = {
    //   id: createId(),
    //   title: task,
    //   isDone: false,
    // };

    const newArr = [...tasks];

    // if (ID !== "0") {
    //   newArr.map((e) => {
    //     if (e.id === ID) {
    //       e.title = task;
    //     }
    //     return e;
    //   });
    // } else {
    //   newArr.push(newObj);
    // }

    // console.log(newObj);
    newArr.push({...taskObj,id:createId()})
    setTasks(newArr);

    // setTask("");
    // setId("0");
    setModal(false);
    setTaskObj(init)
  };

  const onDoneTask = (id) => {
    const objList = tasks.map((val) => {
      if (val.id === id) {
        console.log(val);

        val.isDone = !val.isDone;

        if (val.isDone) {
          setDoneTotal(doneTotal + 1);
        } else {
          setDoneTotal(doneTotal - 1);
        }
      }
      return val;
    });

    setTasks(objList);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleEdit = (id, title, isDone) => {
    if (!isDone) {
      setTask(title);
      setId(id);
      setModal(true);
    }
  };

  const handleDelete = (id) => {
    const newArr = tasks.filter((e) => e.id !== id);
    setTasks(newArr);
  };

  function createId() {
    let abc = "ABCDEFJHJKLMNO";

    let num = "1234567890";

    console.log(Math.random(1 * 10));

    let newStr =
      abc.split("")[Math.floor(Math.random() * 10 + 1)] +
      abc.split("")[Math.floor(Math.random() * 10 + 1)] +
      abc.split("")[Math.floor(Math.random() * 10 + 1)];

    let newNumber =
      num.split("")[Math.floor(Math.random() * 10)] +
      "" +
      num.split("")[Math.floor(Math.random() * 10)] +
      "" +
      num.split("")[Math.floor(Math.random() * 10)];

    console.log(newStr + newNumber);

    return newStr + newNumber;
  }

  return (
    <div className="container">
      <div className="row mt-4">
        {/* <Toolbar /> */}

        {/*
        <Signup /> 
         <LightSwitch />
         */}

        <div className="col-md-4">
          <h1>Todo List</h1>
          Total {tasks.length}
          <p>Done {doneTotal}</p>
          <div className="d-flex gap-3 justify-content-between align-items-center">
            <button className="btn btn-primary" onClick={handleModal}>
              +Add task
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <Todolist
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        onDoneTask={onDoneTask}
        />
    
          <Modal
            modal={modal}
            setModal={handleModal}
            id={ID}
            addTask={addTask}
            taskObj={taskObj}
            setTaskObj={setTaskObj}
            // setTasks={setTasks}
          />
      
      </div>
    </div>
  );
}

export default App;