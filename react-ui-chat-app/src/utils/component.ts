import React from "react";

export const combineClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')
export const combineStyle = (...styles: (React.CSSProperties | undefined)[]) => Object.assign({}, ...styles)
