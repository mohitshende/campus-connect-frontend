import axios from "../../axios";
import { useContext, useEffect, useState } from "react";
import DeptPost from "../deptPost/DeptPost";
import "./DeptFeed.css";
import { AuthContext } from "../../context/AuthContext";
import DeptShare from "../deptShare/DeptShare";

const DeptFeed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchPosts();
  }, [username, user._id]);
  const fetchPosts = async () => {
    const res = await axios.get("deptPosts", {
      params: { department: user.department },
    });
    setPosts(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  };
  return (
    <div className="feed">
      <div className="feedWrapper">
        {user.role === "Faculty" && <DeptShare fetchPosts={fetchPosts} />}
        {posts.length === 0 && (
          <h3 className="no-posts">No Posts to display...</h3>
        )}
        {posts.map((post) => (
          <DeptPost key={post._id} post={post} fetchPosts={fetchPosts} />
        ))}
      </div>
    </div>
  );
};

export default DeptFeed;
