import { PermMedia, Cancel } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import "./DeptShare.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../axios";
import Avatar from "../../images/noAvatar.png";

const DeptShare = ({ fetchPosts }) => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      department: user.department,
    };

    //TODO: Firebase image upload functionality

    // if(file){
    //   try {

    //   } catch (error) {

    //   }
    // }

    try {
      await axios.post("/deptPosts", newPost);
      fetchPosts();
      desc.current.value = "";
      setFile(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user.profilePicture || Avatar}
            alt=""
          />
          <input
            placeholder={`Share useful information for your department`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img
              className="shareImg"
              src={URL.createObjectURL(file)}
              alt="Preview"
            />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="red" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeptShare;
