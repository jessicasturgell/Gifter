import { Routes, Route, Navigate } from "react-router-dom";
import PostList from "./PostList";
import { PostForm } from "./PostForm.jsx";
import { PostDetails } from "./PostDetails.jsx";
import { UserPosts } from "./UserPosts.jsx";

const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />

      <Route path="/users/:id" element={<UserPosts />} />

      <Route path="/posts/add" element={<PostForm />} />

      <Route path="/posts/:id" element={<PostDetails />} />

      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
};

export default ApplicationViews;
