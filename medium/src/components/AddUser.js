import React, { useState } from "react";

export default function AddUser() {
  const init = {
    // username: "",
    // password: "",
    // userType: "",
    firstName: "",
    lastName: "",
    // userImg: "",
    organization: "",
  };

  const [user, setUser] = useState(init);

  const onSave = (e) => {
    e.preventDefault();

    console.log(user);

    fetch("https://medium-api-psi.vercel.app/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saved");
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  // 
  return (
    <div>
      <form>
        <div className="mb-3">
          <input
            type="text"
            placeholder="firstName"
            value={user.firstName}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="lastName"
            value={user.lastName}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="organization"
            value={user.organization}
            onChange={(e) => {
              setUser({ ...user, organization: e.target.value });
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={onSave}>Save</button>
      </form>
    </div>
  );
}