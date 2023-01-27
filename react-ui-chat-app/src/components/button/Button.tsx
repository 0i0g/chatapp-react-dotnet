import React, {HTMLAttributes} from 'react';
import classes from './Button.module.css';
import {BtnType, btnTypeMap} from "./utils";
import {combineClasses, combineStyle} from "../../utils/component";

type Props = HTMLAttributes<HTMLButtonElement> & {
  prefixComp?: JSX.Element;
  suffixComp?: JSX.Element;
  children?: React.ReactNode;
  type: BtnType
}

const Button = ({prefixComp, suffixComp, className, children, type, style, ...buttonProps}: Props) => {
  const classN = combineClasses(classes.button, className);
  const {bg, color} = btnTypeMap[type] || btnTypeMap.default;
  const rootStyle = combineStyle({backgroundColor: bg, color}, style);

  return (
      <button className={classN} style={rootStyle} {...buttonProps}>
        {prefixComp}
        {children}
        {suffixComp}
      </button>
  );
}

Button.defaultProps = {
  type: 'default'
}

export default Button;
