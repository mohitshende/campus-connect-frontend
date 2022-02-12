import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import defaultCover from "../../images/noCover.png";
import Avatar from "../../images/noAvatar.png";

const Profile = () => {
  const [user, setUser] = useState({});

  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <LeftSidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || defaultCover}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || Avatar}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <RightSidebar page="profile" user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
