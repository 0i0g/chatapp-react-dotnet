import React from 'react';
import UserRow from "./UserRow";
import {userRows} from "../../mock-data/user-row";

const UserList = () => {

  const style: { [key: string]: React.CSSProperties } = {
    root: {
      width: 400,
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid #ccc',
    }
  }

  return (
      <div style={style.root}>
        {userRows.map(user => (
            <UserRow user={user} key={user.id}/>
        ))}
      </div>
  );
}

export default UserList;

