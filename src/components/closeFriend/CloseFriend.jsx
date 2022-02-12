import "./CloseFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="leftsidebarFriend">
      <img className="leftsidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="leftsidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
