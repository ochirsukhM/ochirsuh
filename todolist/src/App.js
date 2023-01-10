import './App.css';
import {useState} from 'react'

function App() {
  const[task, setTask] = useState("");
  const[tasks,setTasks]=useState([]);
  const[count,setCount]=useState(0);
  

  const addTask =()=>{

    console.log("add",tasks);
    const newObj= {
      id:tasks.length,
      title:task,
      isDone:false,
    }  
    const newArr=[...tasks]
    newArr.push(newObj)
    setTasks(newArr)
    setTask("")
    }
  
  const onDoneTask=(id)=>{
    const objList = tasks.map((val=>{
      if (val.id==id){
        console.log(val);
        val.isDone=!val.isDone;
        
       }
     
      
      return val;
    
    }))
    setTasks(objList);
    showDoneTotal();
}

function editTask(id){
  tasks.map((e)=>{
    if(e.id==id){
      setTask(e.title)
    }
  })
}

  function deleteTask(id){
    tasks.map((e)=>{
      if(e.id == id){
        let newArr = [...tasks];
        newArr.splice(newArr.indexOf(e) , 1)
        setTasks(newArr);
        console.log("delet",newArr);

      }
    })

    

    }

  function showDoneTotal(){
    const arr= tasks.filter((e)=>e.isDone==true)
    setCount(arr.length)
  }


  return (
    <div className="container">
      <div className='row mt-4'>
        
        <div className='col-md-4'>
        <h1>Todo List</h1>Total{tasks.length} Checked {count}
            <div className='d-flex gap-3'>
          <input className='form-control' 
          type="text" 
          value={task} 
          onChange={(e)=>setTask(e.target.value)} 
          placeholder='task oruulna uu'
          />
          <button className='btn btn-primary' onClick={addTask}>+add</button>
            </div>
        </div>
      </div>
      <div className='row mt-3'>
          <div className='col-md-4'>
            {
              tasks.map((e)=>(
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex'>
                    <input
                    type="checkbox" 
                    checked={e.isDone} 
                    onChange={()=>onDoneTask(e.id)
                    }
                    />
                    <h4>{e.title}</h4>
                  </div>
                  <div>
                    <button className='btn btn-warning' onClick={()=> editTask(e.id)}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>deleteTask(e.id)}>Delete</button>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
    </div>
  );
}

export default App;

