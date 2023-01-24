import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import { users } from "./data";
import { Outlet } from "react-router-dom";
import Header from "./Header";

  export default function MainLayout(){
    const [user, setUser] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [bgColor, setBgColor] = useState(user ? "white" : "#ffc017");
  const objStyle = {
    backgroundColor: bgColor,
  };
  const handleScroll = (event) => {
    if (user) {
      setBgColor("white");
    } else {
      if (event.currentTarget.scrollTop >= 600) {
        setBgColor("white");
      } else {
        setBgColor("#ffc017");
      }
    }
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  const onLogin = (uname, pword) => {
    users.map((userObj) => {
      if (userObj.username == uname && userObj.password == pword) {
        setShowModal(false);
        setUser(userObj);

        return "success";
      }
    });
  };

  return (
    <div>
        <div style={{ width: "100vw", overflow: "scroll", height: "100vh" }}
        onScroll={handleScroll} className="App">
        <Navbar style={objStyle}
          onLogin={onLogin}
          user={user}
          setUser={setUser}
          showModal={showModal}
          openModal={openModal}
          //setAdmin={setAdmin} 
          />
          <div>
            {!user && <Header/>}
            <Outlet/>
          </div>
          </div>
    </div>
  )
  }