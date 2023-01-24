import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import {BarChart} from "./BarChart"
import { PieChart } from "./PieChart";
import { Link } from "react-router-dom";
export default function Admin() {
 




    return <div>
        <div className="navbar bg-dark flex-nowrap">

            <a className="col-md3 navbar-brand text-light" href="#">Company Name</a>
            <input type="text" className="w-50 form-control bg-dark text-light" />
            <div className="nav">
                <div className="nav-item">
                    <span className="text-light">Log out</span>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="nav bg-light flex-column">
                        <div className="nav-item">
                            <Link to="/admin" className="nav-link">Dashboard </Link>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link">News</a>
                        </div>
                        <div className="nav-item">
                            <Link to="/users" className="nav-link">User</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <Outlet/>
                </div>
               
            </div>
           

        </div>
    </div>

}