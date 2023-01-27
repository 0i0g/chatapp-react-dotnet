import React, {useEffect, useRef} from 'react';
import classes from './ChatInput.module.css';
import {CgImage, FiSend} from "react-icons/all";
import {imageAccept} from "../../configs/form";
import Button from "../button/Button";
import {IMessage} from "../../@type/chatType";
import {isMessageEmpty} from "../../utils/message";

type Props = {
  onSend?: (message: IMessage) => void,
  value?: string,
  onChange?: (value: string) => void,
}
const ChatInput = ({onSend, value = '', onChange}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.value = value;
  }, [inputRef, value]);

  const handleSend = () => {
    if (!onSend || !inputRef.current) return;
    const message: IMessage = {text: inputRef.current.value};
    if (isMessageEmpty(message)) return;
    onSend(message);
  }

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(e.target.value);
  }

  return (
      <div className={classes.root} onKeyDown={onEnter}>
        <label className={classes.input} htmlFor="chat-input">
          <label className={classes.iconButton} htmlFor='image-input'><CgImage/></label>
          <input type="file" className='d-none' id='image-input' accept={imageAccept}/>
          <input type="text" className={classes.chatInput} id='chat-input' placeholder='Write a message'
                 ref={inputRef} onChange={handleOnChange}/>
          <Button className={classes.sendButton} suffixComp={<FiSend/>} onClick={handleSend}>Send</Button>
        </label>
      </div>
  );
}

export default ChatInput;
