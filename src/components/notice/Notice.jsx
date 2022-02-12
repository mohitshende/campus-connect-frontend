import "./Notice.css";
import { useState } from "react";
import { Avatar, Chip } from "@material-ui/core";

const Notice = ({ notice }) => {
  const [like, setLike] = useState(notice.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="notice">
      <div className="noticeWrapper">
        <div className="noticeTop">
          <div className="noticeTopLeft">
            <Chip className="noticeBadge" label="General" />
            <Chip className="noticeBadge" label="Examination" />
          </div>
          <div className="noticeTopRight">
            <Chip
              avatar={<Avatar alt="Natacha" src="/assets/person/1.jpeg" />}
              label="Richa Purohit"
              className="noticeBadge"
            />
            <span className="noticeDate">{notice.date}</span>
          </div>
        </div>
        <div className="noticeCenter">
          <span className="noticeText">{notice?.desc}</span>
          <img className="noticeImg" src={notice.photo} alt="" />
        </div>
        <div className="noticeBottom">
          <div className="noticeBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="noticeLikeCounter">{like} people liked it</span>
          </div>
          <div className="noticeBottomRight">
            <span className="noticeCommentText">{notice.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
