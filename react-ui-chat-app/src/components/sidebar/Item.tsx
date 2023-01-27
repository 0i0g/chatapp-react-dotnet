import React, { HTMLAttributes } from 'react';
import { Link, To, useLocation } from 'react-router-dom';
import { combineStyle } from '../../utils/component';

const activeColor = '#727BFE';

const rootStyle = (active: boolean): React.CSSProperties => ({
  width: '100%',
  padding: '15px 30px',
  boxSizing: 'border-box',
  borderLeft: active ? `5px solid ${activeColor}` : '5px solid transparent',
  display: 'flex',
  alignItems: 'center',
  color: active ? activeColor : "#616161",
  fontWeight: 'bolder',
  textDecoration: 'none!important',
  fontSize: 16
});

const linkStyle = {
  textDecoration: 'none',
};

const iconStyle: React.CSSProperties = {
  marginRight: '10px',
  fontSize: 20,
}

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  icon?: React.ElementType;
  path?: To;
}

const Item = ({ children, icon: Icon, path, style, ...rest }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const active = currentPath == path;
  const rootStyleCombined = combineStyle(rootStyle(active), style);

  return path ?
    <Link to={path} style={linkStyle}>
      <span style={rootStyleCombined} {...rest}>
        {Icon && <Icon style={iconStyle} />}
        {children}
      </span >
    </Link > :
    <div style={rootStyleCombined} {...rest}>
      {Icon && <Icon style={iconStyle} />}
      {children}
    </div>
}

export default Item;
