import React from "react";
export default function Modal(
    {
        setModal,
        modal,
        id,
        addTask,
        taskObj,
        setTaskObj,
    }
){
    const dn= modal ? "block":"none";
    return (
        <div className="modal" style={{display:dn}} onClick={setModal}>
            <div className="modal-body" onClick={(e)=>e.stopPropagation()}>
                <div>
                    <h2>Edit</h2>
                </div>
                <div className="w-100">
                    <hr/>
                    <div className="mb-3">
                        <label className="form-label" for="type">
                            Work to be done
                        </label>
                        <input
                        id="task"
                        name="task"
                        className="form-control"
                        type="text"
                        value={taskObj.title}
                        onChange={(e)=>{
                            setTaskObj({...taskObj, title : e.target.value})
                        }}
                        placeholder="input task"
                        />
                        <input type="hidden" value={taskObj.id}/>
                        <button className="btn btn-primary" onClick={addTask}>
                            +add
                        </button>
                        
                        <div Modal></div>
                        <hr/>

                    </div>
                    <div className="btn btn-light" onClick={setModal}>
                        Close
                    </div>
                </div>
            </div>
        </div>
    )
}