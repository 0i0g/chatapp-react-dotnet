import {IMessage} from "../@type/chatType";

export const isMessageEmpty = (message?: IMessage) => {
  return message && message.text === "";
}
