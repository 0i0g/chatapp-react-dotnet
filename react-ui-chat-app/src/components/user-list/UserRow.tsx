import classes from "./UserList.module.css";
import Avatar from "../avatar/Avatar";
import {combineClasses} from "../../utils/component";
import React from "react";
import {IUserChatInfo} from "../../@type/chatType";
import {timeAgo} from "../../utils/time";
import {fontSizeByLength} from "../../utils/string";

interface Props {
  user: IUserChatInfo;
  onClick?: (user: IUserChatInfo) => void;
}

const UserRow = ({user, onClick: handleOnClick}: Props) => {

  const onClick = () => {
    if (handleOnClick) {
      handleOnClick(user);
    }
  }

  return (
      <div className={classes.user} onClick={onClick}>
        <Avatar alt='avatar' src={user.avatar}/>
        <div className={classes.userInfo}>
          <div className={combineClasses(classes.userName, classes.textTruncated)}>
            {user.name}
          </div>
          <div className={combineClasses(classes.userData1, classes.textTruncated)}>
            {user.msg}
          </div>
        </div>
        <div className={classes.status}>
          <div className={classes.userData2}
               style={{fontSize: fontSizeByLength(timeAgo(user.onlineTime))}}>{timeAgo(user.onlineTime)}</div>
        </div>
      </div>
  )
}

export default UserRow;
