import { useContext, useEffect, useState } from "react";

import style from "./UserProfile.module.css";

import * as userService from "../../services/userService";
import { UserContext } from "../../contexts/userContext";

export const Profile = () => {
  const { user } = useContext(UserContext);
  const [userPosts, setUserPosts] = useState([]);

  // useEffect(() => {
  //     userService.
  // }, [])

  return (
    <div className={style.dad}>
      <div className={style.container}>
        <img src={user.profileImg} alt="profilePic" />
        <div className={style.mini_container}>
          <h3>Email: {user.email}</h3>
          <p>Gender: {user.sex}</p>
          <p>Work experience: {user.workExp}</p>
        </div>
      </div>
      <div className={style.posts}>

      </div>
    </div>
  );
};
