import React, { useState, useEffect } from "react";
import { getAllPosts } from "../services/PostService";
import { Post } from "./Post";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Search } from "./Search.jsx";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState({}); 
  const navigate = useNavigate();

  const getPosts = () => {
    getAllPosts().then((allPosts) => setPosts(allPosts));
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Search search={search} setSearch={setSearch} setPosts={setPosts} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="cards-column">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
