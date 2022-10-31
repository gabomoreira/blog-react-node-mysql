import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPostsByCat } from "../api";

const Menu = ({ cat, postId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await getPostsByCat(cat);
        setPosts(data.filter((post) => post.id != postId));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Others posts you may like</h1>
      {posts?.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
