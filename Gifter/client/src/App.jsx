import React from "react";
import "./index.css";
import PostList from "./components/PostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostForm } from "../forms/PostForm.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <PostForm />
          <PostList />
      </BrowserRouter>
    </>
  );
}

export default App;
