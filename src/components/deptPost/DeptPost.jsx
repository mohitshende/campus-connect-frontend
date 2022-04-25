import { MoreVert } from "@material-ui/icons";
import "./DeptPost.css";
import { useState, useEffect, useContext } from "react";
import axios from "../../axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../../images/noAvatar.png";

const DeptPost = ({ post, fetchPosts }) => {
  const [user, setUser] = useState({});
  const [showMenu, setShowMenu] = useState(false);

  const { user: currentUser } = useContext(AuthContext); // using user as currentUser

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const editPost = async () => {
    //TODO: Create separate file for modal
    try {
      await axios.put(`/posts/${post._id}`, {
        userId: currentUser._id,
      });
      fetchPosts();
    } catch (err) {
      //FIXME: Add toast
      console.log(err);
    }
  };

  const deletePost = async () => {
    try {
      await axios.delete(`/deptPosts/${post._id}`);
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture || Avatar}
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          {currentUser._id === post.userId && (
            <div className="postTopRight">
              <MoreVert
                className="vertMenuIcon"
                onClick={() => setShowMenu(!showMenu)}
              />
              {showMenu && (
                <div className="vertMenu">
                  <span onClick={() => editPost()}>Edit</span>
                  <span onClick={() => deletePost()}>Delete</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DeptPost;
