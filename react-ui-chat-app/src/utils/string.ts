export const fontSizeByLength = (text: string) => {
  if (text.length < 12) {
    return 13;
  } else if(text.length < 15) {
    return 12;
  }
}
