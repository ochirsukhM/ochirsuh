import React from "react";
export default function Todolist(
    {
        tasks,
        onDoneTask,
        handleEdit,
        handleDelete,
    }
){
    return (
        <div className="col-md-4">
            {
                tasks.map((e)=>(
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <input
                            type="checkbox"
                            checked={e.isDone}
                            onChange={()=>onDoneTask(e.id)}
                            />
                            <span>{e.title}</span>
                        </div>
                        {/* <div className="col-md-2">
                            {e.type==="1" ? "Work":"Personal"}
                        </div>
                        <div className="col-md-2">
                            {e.isImportant ? "yes" : "no"}
                        </div> */}
                        <div className="col-md-4">
                            <button
                            className="btn badge bg-warning"
                            onClick={()=>
                            handleEdit(e.id,e.title,e.isDone)}
                            >Edit</button>
                            <button
                            className="btn badge bg-danger"
                            onClick={()=>handleDelete(e.id)}
                            >
                            Delete    
                            </button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}