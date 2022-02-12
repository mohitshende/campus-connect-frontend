import "./LeftSidebar.css";
import {
  RssFeed,
  Chat,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  Assignment,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const LeftSidebar = () => {
  return (
    <div className="leftsidebar">
      <div className="leftsidebarWrapper">
        <ul className="leftsidebarList">
          <li className="leftsidebarListItem">
            <Assignment className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Notice Board</span>
          </li>
          <li className="leftsidebarListItem">
            <School className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Departmental Feed</span>
          </li>
          <li className="leftsidebarListItem">
            <Chat className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Chats</span>
          </li>
        </ul>
        <button className="leftsidebarButton">Show More</button>
        <hr className="leftsidebarHr" />
        <ul className="leftsidebarFriendList">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
