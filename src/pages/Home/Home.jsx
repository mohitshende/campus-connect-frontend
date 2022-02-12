import Topbar from "../../components/topbar/Topbar";
import LeftSidebar from "../../components/leftsidebar/LeftSidebar";
import Feed from "../../components/feed/Feed";
import RightSidebar from "../../components/rightsidebar/RightSidebar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <LeftSidebar />
        <Feed />
        <RightSidebar user />
      </div>
    </>
  );
};

export default Home;
