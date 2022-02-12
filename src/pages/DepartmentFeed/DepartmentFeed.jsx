import "./DepartmentFeed.css";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSidebar";

const DepartmentFeed = () => {
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
                src="assets/dept.jpg"
                alt=""
              />
              <h1 className="DepartmentFeedTitle">
                School of Computer Applications
              </h1>
            </div>
            <div className="DepartmentFeedInfo">
              <h4 className="DepartmentFeedInfoName">
                This is the department feed of School of Computer Applications.
              </h4>
            </div>
          </div>
          <div className="DepartmentFeedRightBottom">
            <Feed />
            <RightSidebar page="DepartmentFeed" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentFeed;
