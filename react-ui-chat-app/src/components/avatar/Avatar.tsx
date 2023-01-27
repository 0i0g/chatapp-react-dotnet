import React, { ImgHTMLAttributes } from 'react';
import { combineStyle } from '../../utils/component';
import defaultAvatar from '../../assets/images/default-avatar.png';

type Props = ImgHTMLAttributes<HTMLImageElement>;

export const Avatar = ({ style, src = defaultAvatar, ...imgProps }: Props) => {
  const rootStyle = combineStyle({
    height: 40,
    width: 40,
    borderRadius: 50,
    verticalAlign: 'middle'
  }, style)

  return (
    <img style={rootStyle} src={src} {...imgProps} />
  )
}


export default Avatar;