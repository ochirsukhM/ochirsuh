import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  

  const getData = () => {
    fetch("https://medium-api-psi.vercel.app/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
        setUsers(data.result);
      })
      .catch((err) => console.log(err));
  };

  function onDelete(id) {
      
      
      fetch(`https://medium-api-psi.vercel.app/api/users?id=${id}`, {
        method: "DELETE",
        headers:{ "Content-Type" : "application.json"},
      }).then((res) => res.json())
      .then((data)=>
      {
        console.log(data);
      getData()
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
        {users.map((e,i)=>{
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