import React from 'react'
import {BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Dashboard from './dashboard';
import Friend from './friends';
import Posts from "./posts";
import Friendrequests from "./friendrequests";
import Home from './home';
import Navbar from './navbar';
import Like from './like';
import Comment from './comment';

 


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/friends" element={<Friend />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/friendrequests" element={<Friendrequests />} />
          <Route path="/like" element={<Like />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
