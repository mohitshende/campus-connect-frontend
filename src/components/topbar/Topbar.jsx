import "./Topbar.css";
import {
  ArrowDropDown,
  Chat,
  Notifications,
  Person,
  Search,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import logo from "../../images/logo.png";
import Avatar from "../../images/noAvatar.png";
import axios from "../../axios";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { user } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const userList = await axios.get(
          `/users/getallusers?name=${searchText}`
        );
        setSearchResults(userList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [searchText]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.go("/login");
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend,post or video"
            className="searchInput"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        {searchText && (
          <div className="searchResults">
            {searchResults.map((user) => {
              return (
                <Link
                  to={`/profile/${user.username}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => setSearchText("")}
                >
                  <div className="user" key={user._id}>
                    <img className="user_img" src={Avatar} alt="user" />
                    <h3>{user.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarRightEnd">
          <Link to={`/profile/${user.username}`}>
            <img
              src={user.profilePicture || Avatar}
              alt=""
              className="topbarImg"
            />
          </Link>
          <h4 className="topbarUsername">{user.username}</h4>
          <ArrowDropDown
            className="topbarRightEndIcon"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          <span
            className="dropdown"
            style={{ display: showDropdown ? "block" : "none" }}
            onClick={handleLogout}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
