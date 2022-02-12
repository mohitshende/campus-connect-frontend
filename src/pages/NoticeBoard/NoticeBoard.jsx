import "./NoticeBoard.css";
import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import Notices from "../../components/notices/Notices";

const NoticeBoard = () => {
  return (
    <>
      <Topbar />
      <div className="NoticeBoard">
        <LeftSidebar />
        <div className="NoticeBoardRight">
          <Notices />
          <div className="NoticeBoardRightBottom"></div>
        </div>
      </div>
    </>
  );
};

export default NoticeBoard;
