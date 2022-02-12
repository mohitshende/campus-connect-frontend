import "./RightSidebar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState, useContext } from "react";
import Avatar from "../../images/noAvatar.png";
import axios from "axios";
import giftImg from "../../images/gift.png";
import adImg from "../../images/ad.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

const RightSidebar = ({ page, user }) => {
  const [friends, setFriends] = useState([]);

  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    setFollowed(currentUser.following.includes(user?._id));
  }, [user]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  const renderSwitch = (page) => {
    switch (page) {
      case "profile":
        return <ProfileRightSidebar />;
      case "DepartmentFeed":
        return <DepartmentFeed />;
      default:
        return <HomeRightSidebar />;
    }
  };

  const HomeRightSidebar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={giftImg} alt="" />
          <span className="birthdayText">
            <b>Paula</b> and <b>3 other friends</b> have birthday today...
          </span>
        </div>
        <img className="rightsidebarAd" src={adImg} alt="" />
        <h4 className="rightsidebarTitle">Online friends</h4>
        <ul className="rightsidebarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightSidebar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightsidebarFollowButton" onClick={handleFollow}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="profilerightsidebarTitle">User Information</h4>
        <div className="rightsidebarInfo">
          <div className="rightsidebarInfoItem">
            <span className="rightsidebarInfoKey">City:</span>
            <span className="rightsidebarInfoValue">{user.city}</span>
          </div>
          <div className="rightsidebarInfoItem">
            <span className="rightsidebarInfoKey">From:</span>
            <span className="rightsidebarInfoValue">{user.from}</span>
          </div>
          <div className="rightsidebarInfoItem">
            <span className="rightsidebarInfoKey">Department:</span>
            <span className="rightsidebarInfoValue">{user.department}</span>
          </div>
        </div>
        <h4 className="rightsidebarTitle">User Friends</h4>
        <div className="rightsidebarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightsidebarFollowing">
                <img
                  src={friend.profilePicture || Avatar}
                  alt="friend"
                  className="rightsidebarFollowingImg"
                />
                <span className="rightsidebarFollowingName">
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  const DepartmentFeed = () => {
    return (
      <>
        <h4 className="profilerightsidebarTitle">Department Information</h4>
        <div className="rightsidebarInfo">
          <div className="rightsidebarInfoItem">
            <span className="rightsidebarInfoKey">City:</span>
            <span className="rightsidebarInfoValue">New York</span>
          </div>
          <div className="rightsidebarInfoItem">
            <span className="rightsidebarInfoKey">From:</span>
            <span className="rightsidebarInfoValue">Madrid</span>
          </div>
        </div>
        <h4 className="rightsidebarTitle">Department Faculties</h4>
        <div className="rightsidebarFollowings">
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
        </div>
        <h4 className="rightsidebarTitle">Department Students</h4>
        <div className="rightsidebarFollowings">
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/7.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightsidebar">
      <div className="rightsidebarWrapper">{renderSwitch(page)}</div>
    </div>
  );
};

export default RightSidebar;
