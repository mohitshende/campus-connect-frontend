import "./CloseFriend.css";
import Avatar from "../../images/noAvatar.png";
import { Link } from "react-router-dom";

const CloseFriend = ({ user }) => {
  return (
    <Link to={"/profile/" + user.username} style={{ textDecoration: "none" }}>
      <li className="leftsidebarFriend">
        <img
          className="leftsidebarFriendImg"
          src={user.profilePicture || Avatar}
          alt=""
        />
        <span className="leftsidebarFriendName">{user.username}</span>
      </li>
    </Link>
  );
};

export default CloseFriend;
