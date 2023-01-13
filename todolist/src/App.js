import "./App.css"
import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  // const [task, setTask] = useState(""); // input
  // const [tasks, setTasks] = useState([]);
  // const [ID, setId] = useState("0");
  // const [modal, setModal] = useState(false);

  // const [doneTotal, setDoneTotal] = useState(0);

  const [object, setObject] =useState({
    task:"",
    tasks:[],
    ID:"0",
    modal:false,
    doneTotal:0
  })

  const addTask = () => {
    const newObj = {
      id: createId(),
      title: object.task,
      isDone: false,
    };

    const newArr = [...object.tasks];

    if (object.ID !== "0") {
      newArr.map((e) => {
        if (e.id === object.ID) {
          e.title = object.task;
        }
        return e;
      });
    } else {
      newArr.push(newObj);
    }

    // setTasks(newArr);
    setObject({...object,tasks:newArr})

    // setTask("");
    setObject({...object,task:""})

    // setId("0");
    setObject({...object,ID:"0"})

    // setModal(false);
    setObject({...object,modal:false})
  };

  const onDoneTask = (id) => {
    const objList = object.tasks.map((val) => {
      if (val.id === id) {
        console.log(val);

        val.isDone = !val.isDone;

        if (val.isDone) {
          // setDoneTotal(doneTotal + 1);
          setObject({...object,doneTotal:object.doneTotal+1})
        } else {
          // setDoneTotal(doneTotal - 1);
          setObject({...object,doneTotal:object.doneTotal-1})
        }
      }
      return val;
    });

    // setTasks(objList);
    setObject({...object,tasks:objList})
  };

  const handleModal = () => {
    // setModal(!modal);
    setObject({...object,modal:!object.modal})
  };

  const handleEdit = (id, title, isDone) => {
    if (!isDone) {
      // setTask(title);
      // setId(id);
      // setModal(true);
      setObject({...object,task:title,ID:id,modal:true})
    }
  };

  const handleDelete = (id) => {
    const newArr = object.tasks.filter((e) => e.id !== id);
    // setTasks(newArr);
    setObject({...object,tasks:newArr})
  };

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
          Total {object.tasks.length}
          <p>Done {object.doneTotal}</p>
          <div className="d-flex gap-3">
            <input
              id="HAH"
              className="form-control"
              type="text"
              value={object.task}
              // onChange={(e) => setTask(e.target.value)}
              onChange={(e)=>setObject({...object,task:e.target.value})}
              placeholder="task oruulna uu"
            />
            <input type="hidden" value={object.ID} />
            <button className="btn btn-primary" onClick={addTask}>
              +Add
            </button>
            <button className="btn btn-primary" onClick={handleModal}>
              Modal
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          {object.tasks.map((e) => (
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <input
                  type="checkbox"
                  checked={e.isDone}
                  onChange={() => onDoneTask(e.id)}
                />

                <h4>{e.title}</h4>
              </div>
              <div>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(e.id, e.title, e.isDone)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {object.modal && (
          <Modal
            modal={object.modal}
            setModal={handleModal}
            task={object.task}
            id={object.ID}
            // setTask={setTask}
           setTask= {setObject}
            addTask={addTask}
            // setTasks={setTasks}
            setTasks={setObject}
          />
        )}
      </div>
    </div>
  );
}

export default App;

