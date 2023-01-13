import "./App.css"
import { useState } from "react";
import Modal from "./components/Modal";
import Todolist from "./components/Todolist";

function App() {
  const init={
    id:"",
    title:"",
    type:0,
    isImportant:false,
    isDone:false,
  }
  const [tasks, setTasks] = useState([]);
  // const [ID, setId] = useState("0");
  const [modal, setModal] = useState(false);
  const [doneTotal, setDoneTotal] = useState(0);
  const [taskObj,setTaskObj] = useState(init)

  const addTask = () => {
   

    const newArr = [...tasks];

    console.log("Edit",taskObj);

    if (taskObj.id !== "") {

      console.log("Edit");
     
     const r = newArr.map((e) => {

     

        if (e.id === taskObj.id) {
          console.log(taskObj);
         return {...e, title: taskObj.title }
        } else {
          return e;
        }
      });

      setTasks(r)
    } else {

      setTasks([...tasks, {...taskObj,id:createId()}])
      // newArr.push({...taskObj,id:createId()})
    }

    // console.log(newObj);

    // setTasks(newArr);
  
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
      // setTask(title);
      // setId(id);
      setModal(true);
      setTaskObj({...taskObj, id:id, title : title})
    }}

  const handleDelete = (id) => {
    const newArr = tasks.filter((e) => e.id !== id);
    setTasks(newArr);
    countDone(taskObj.isDone)
    
  };

  const countDone= (isDone) =>{
    const a= taskObj.filter((e)=>e.isDone!== isDone)
    setDoneTotal(doneTotal=a.length)
  }

  function createId() {
    let abc = "ABCDEFJHJKLMNO";

    let num = "1234567890";

  

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

   

    return newStr + newNumber;
  }

  return (
    <div className="container">
      <div className="row mt-4">
      

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
            // id={ID}
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