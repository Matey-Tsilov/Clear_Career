import { useContext, useEffect, useState } from "react";

import style from "./UserProfile.module.css";
import {Offer} from '../Dashboard/Offer'

import * as userService from "../../services/userService";
import { UserContext } from "../../contexts/userContext";

export const Profile = () => {
  const { user } = useContext(UserContext);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
      userService.getUserById(user.id).then(res => setUserPosts(res.userPosts))
  }, [])

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
          {
          userPosts.length == 0 
          ? <h1>The user has not created any offers till now!</h1>
          : <>{userPosts.map(p => <Offer key={p._id} offer={p}/>)}</>
          }
      </div>
    </div>
  );
};
