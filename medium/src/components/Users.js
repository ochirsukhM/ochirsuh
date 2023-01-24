import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Users() {

  const [data, setData] = useState([]);

  

  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/users")
      .then((response) => response.json())
      .then((dt) => {
        console.log(dt.result);
        setData(dt.result);
      })
  }, [])

  function onDelete(id) {
      
      
      fetch(`https://medium-api-psi.vercel.app/api/users?id=${id}`, {
        method: "DELETE",
        headers:{ "Content-Type" : "application.json"},
      }).then((res) => res.json())
      .then((dt)=>
      {
        console.log(dt)
        setData(
          data.filter((data)=> {
            return data.id !== id
          })
        )
      }
)
      .catch((err)=>{console.log(err);})
  
    }
  

  return (
    <div>
      
      <h2>
        <Link to="/adduser">Add</Link>
      </h2>
      <div>
        <h1>List of Users</h1>
        {data.map((e,i)=>{
          return <div key={i} className="row">
          <div className="col-md-9 d-flex justify-content-between">
          
            <h6>{i} {e.firstName} {e.lastName}</h6>
            <button className="btn btn-primary" onClick={()=>onDelete(e._id)}>
              DELETE
            </button>
            
          </div>
          </div>
        })}
      </div>
    </div>
  );
}