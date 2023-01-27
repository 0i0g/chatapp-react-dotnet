import React, {useEffect, useRef, useState} from 'react';
import classes from './Chat.module.css';
import ChatRow from "./ChatRow";
import ChatInput from "./ChatInput";
import {IChatRow, IMessage} from "../../@type/chatType";
import {HubConnection, HubConnectionBuilder} from '@microsoft/signalr';
import Loading from "../loading/Loading";
import Scrollbars from "react-custom-scrollbars";

const Chat = () => {
  const [hubConnection, setHubConnection] = useState<HubConnection>();
  const [loading, setLoading] = useState(false);
  const [inputChatValue, setInputChatValue] = useState('');
  const [chatRows, setChatRows] = useState<IChatRow[]>([]);
  const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    const createHubConnect = async () => {
      setLoading(true);
      const hub = new HubConnectionBuilder()
          .withUrl('http://localhost:5000/chat')
          .build();

      try {
        await hub.start();
        hub.on('ReceiveMessage', (message: string) => {
          setChatRows(prev => [...prev, {isSelf: false, msg: {text: message}}])
        });
        console.log('Hub connection started');
      } catch (e) {
        console.log(`Error while establishing connection: ${e}`);
      } finally {
        setHubConnection(hub);
        setLoading(false);
      }
    }

    createHubConnect();

    return () => {
      hubConnection?.stop();
    }
  }, []);

  useEffect(() => {
    if (!scrollbarRef.current) return;
    scrollbarRef.current?.scrollToBottom();
    console.log(scrollbarRef.current?.getValues());
  }, [chatRows]);


  const onSend = async (message: IMessage) => {
    // signalR
    if (hubConnection && hubConnection.state === "Connected") {
      await hubConnection.invoke("SendMessage", message.text);
      setChatRows(prev => [...prev, {isSelf: true, msg: message}]);
      setInputChatValue('')
    }
  }

  return (
      <div className={classes.root}>
        {loading && <div className={classes.overlay}><Loading/></div>}
        <Scrollbars ref={scrollbarRef} style={{height: '100%'}}>
          {chatRows.map((chatRow, index) => <ChatRow key={index} chatRow={chatRow}/>)}
        </Scrollbars>
        <ChatInput onSend={onSend} value={inputChatValue} onChange={setInputChatValue}/>
      </div>
  );
}

export default Chat;
