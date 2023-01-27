import React from 'react';
import UserList from '../components/user-list';
import Chat from "../components/chat";

const ChatPage = () => {
  const rootStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  };

  return (
      <div style={rootStyle}>
        <UserList/>
        <Chat/>
      </div>
  );
}

export default ChatPage;
