import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
function Dashboard() {
  return (
    <div>
      <Home />
      <div id="dashboard-popup">
        <nav>
          <ul>
            <li>
              <Link to="/friends" className="dashboard-link ">
                Friends
              </Link>
            </li>
            <li>
              <Link to="/posts" className="dashboard-link ">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/friendrequests" className="dashboard-link ">
                {" "}
                Friend Requests
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Dashboard;
