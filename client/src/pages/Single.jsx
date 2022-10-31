import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getPost, deletePost } from "../api";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import moment from "moment";
import "../style.scss";

const Single = () => {
  const [post, setPost] = useState({});
  const postId = useLocation().pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await getPost(postId);
        setPost(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await deletePost(postId);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt={post?.title} />
        <div className="user">
          {post?.userImg && <img src={post?.userImg} alt="foto perfil" />}

          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>

          {currentUser?.id === post?.uid && (
            <div className="edit">
              <Link to={`/write?edit=3`} state={post}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5996/5996831.png"
                  alt="update"
                />
              </Link>
              <img
                onClick={handleDelete}
                src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png"
                alt="delete"
              />
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        <p>{post?.desc}</p>
      </div>
      <Menu cat={post?.cat} postId={postId} />
    </div>
  );
};

export default Single;
