import React, { useState } from "react";

export default function LoginModal({ showModal, setShowModal, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const style = { display: showModal ? "block" : "none" };

  return (
    <div className="modal" style={style} onClick={setShowModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-light"
                onClick={() => onLogin(username, password)}
              >
                Login
              </button>
              <button className="btn btn-secondary" onClick={setShowModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}