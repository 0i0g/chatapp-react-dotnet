import React, { HTMLAttributes } from 'react';
import Item from "./Item";
import {
  AiFillSetting, AiOutlineShoppingCart,
  CgProfile,
  FaProductHunt,
  HiCalendarDays,
  HiChatAlt2,
  HiLogout, IoMdHelpBuoy,
  MdCreateNewFolder,
  MdSpaceDashboard
} from "react-icons/all";
import Button from '../button/Button';
import Scrollbars from 'react-custom-scrollbars';

const style: { [key: string]: React.CSSProperties } = {
  root: {
    // display: 'flex',
    display: 'none',
    width: '300px',
    height: '100%',
    backgroundColor: '#F6F6F6',
    zIndex: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    marginLeft: -20,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    padding: '15px 20px',
  },
  icon: {
    fontSize: 20,
    paddingRight: 10
  },
  bottom: {
    paddingTop: 15
  }
}

const Sidebar = () => {

  return (
    <div style={style.root}>
      <Scrollbars>
        <Item style={style.item}>
          <Button style={style.button} onClick={() => alert('test')}><MdCreateNewFolder style={style.icon} />Create New</Button>
        </Item>
        <Item path={'/dashboard'} icon={MdSpaceDashboard}>Dashboard</Item>
        <Item path={'/profile'} icon={CgProfile}>Your Profile</Item>
        <Item path={'/chat'} icon={HiChatAlt2}>Chat</Item>
        <Item path={'/'} icon={HiCalendarDays}>Calender</Item>
        <Item path={'/'} icon={FaProductHunt}>Products</Item>
        <Item path={'/'} icon={AiOutlineShoppingCart}>Cart (2)</Item>
        <Item path={'/'} icon={IoMdHelpBuoy}>Help Center</Item>
      </Scrollbars>
      <div style={style.bottom}>
        <Item path={'/'} icon={AiFillSetting}>Settings</Item>
        <Item path={'/'} icon={HiLogout}>Logout</Item>
      </div>
    </div>
  );
}

export default Sidebar;
