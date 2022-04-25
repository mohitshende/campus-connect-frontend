import "./LeftSidebar.css";
import { Chat, School, Assignment } from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";
import axios from "../../axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const [friends, setFriends] = useState([]);
  const { user } = useContext(AuthContext);

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

  const styles = {
    textDecoration: "none",
  };

  return (
    <div className="leftsidebar">
      <div className="leftsidebarWrapper">
        <ul className="leftsidebarList">
          <Link to="/noticeboard" style={styles}>
            <li className="leftsidebarListItem">
              <Assignment className="leftsidebarIcon" />
              <span className="leftsidebarListItemText">Notice Board</span>
            </li>
          </Link>
          <Link to="/deptfeed" style={styles}>
            <li className="leftsidebarListItem">
              <School className="leftsidebarIcon" />
              <span className="leftsidebarListItemText">Departmental Feed</span>
            </li>
          </Link>
          {/* <Link></Link> TODO: Make chats page */}
          <li className="leftsidebarListItem">
            <Chat className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Chats</span>
          </li>
        </ul>
        <button className="leftsidebarButton">Show More</button>
        <hr className="leftsidebarHr" />
        <ul className="leftsidebarFriendList">
          {friends.map((friend) => (
            <CloseFriend key={friend._id} user={friend} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
