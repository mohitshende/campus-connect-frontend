import "./Notices.css";
import Share from "../share/Share";
import Notice from "../notice/Notice";
import { Posts } from "../../dummyData";

const Notices = () => {
  return (
    <div className="Notices">
      <div className="NoticesWrapper">
        <Share />
        {Posts.map((notice) => (
          <Notice key={notice.id} notice={notice} />
        ))}
      </div>
    </div>
  );
};

export default Notices;
