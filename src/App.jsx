import React, { useState } from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Posts from './Components/posts/Posts';
import Home from './Components/Home';
import Comments from './Components/comments/Comm';
import Albums from './Components/albums/Alb';
import Photos from './Components/photos/Photo';
import Todos from './Components/todos/Todos';
import Users from './Components/users/Users';
import Footer from './Components/Footer';

const App = () => {



  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Posts/>} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
