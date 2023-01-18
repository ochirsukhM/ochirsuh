import React, { useState } from "react";

import "../App.css";
import LoginModal from "./Loginmodal";

export default function Navbar({
  style,
  onLogin,
  user,
  setUser,
  showModal,
  openModal,
  setAdmin
}) {
  const cates = [
    { id: 1, title: "Our story", link: "about" },
    { id: 2, title: "Membership", link: "membership" },
    { id: 3, title: "Write", link: "write" },
    { id: 5, title: "Get started", link: "#" },
    { id: 4, title: "Sign In", link: "#" },
  ];

  return (
    <div style={style} className="navbar">
      <div className="container1">
        <img
          width={150}
          height={30}
          className="img"
          src={"https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"}
          alt="logo"
        />
        <nav>
          <ul className="menus">
            {cates.map((a, index) => (
              <>
                <li className="list-item" key={index}>
                  {a.id == 4 ? (
                    user ? (
                      user.firstName
                    ) : (
                      <span className="btn btn-primary" onClick={openModal}>
                        {a.title}
                      </span>
                    )
                  ) : (
                    <a className="title" href={a.link}>
                      {a.title}
                    </a>
                  )}
                </li>
              </>
            ))}

            {user && (
              <button className="btn btn-warning" onClick={() => setUser({})}>
                Log Out
              </button>
            )}
          </ul>
        </nav>
      </div>

      <LoginModal
        showModal={showModal}
        onLogin={onLogin}
        setShowModal={openModal}
        setAdmin={setAdmin}
      />
    </div>
  );
}