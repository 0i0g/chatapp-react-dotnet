export interface IUserChatInfo {
  id: string,
  name: string,
  onlineTime: Date,
  avatar: string,
  msg: string
}

export interface IMessage {
  text: string
}

export interface IChatRow {
  isSelf: boolean,
  msg: IMessage
}
