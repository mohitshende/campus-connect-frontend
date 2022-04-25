import "./DepartmentFeed.css";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import DeptFeed from "../../components/deptFeed/DeptFeed";
import RightSidebar from "../../components/rightsidebar/RightSidebar";
import DeptCover from "../../images/dept.jpg";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const DepartmentFeed = () => {
  const { user } = useContext(AuthContext);
  const deptNames = {
    SOCA: "School of Computer Applications",
    SOE: "School of Engineering",
    SOD: "School of Design",
    SOMS: "School of Management Studies",
  };
  return (
    <>
      <Topbar />
      <div className="DepartmentFeed">
        <LeftSidebar />
        <div className="DepartmentFeedRight">
          <div className="DepartmentFeedRightTop">
            <div className="DepartmentFeedCover">
              <img
                className="DepartmentFeedCoverImg"
                src={DeptCover}
                alt="cover"
              />
              <h1 className="DepartmentFeedTitle">
                {deptNames[user.department]}
              </h1>
            </div>
            <div className="DepartmentFeedInfo">
              <h4 className="DepartmentFeedInfoName">
                This is the news feed of {deptNames[user.department]}.
              </h4>
            </div>
          </div>
          <div className="DepartmentFeedRightBottom">
            <DeptFeed />
            <RightSidebar page="DepartmentFeed" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentFeed;
