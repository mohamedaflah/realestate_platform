import { IUser } from "./user.types";

export interface ChatReducerInitial {
  messageLoading: boolean;
  chatLoading: boolean;
  chats: IUser[] | null;
  messages: IMessage[] | null;
  error: boolean | string;
  selectedChatId: string | null;
}

export interface IMessage {
  _id?: string;
  chatId: string;
  senderId: string;
  receiverId: string;
  content: {
    type: "image" | "video" | "audio" | "text";
    isReply: boolean;
  };
  status: "read" | "unread";
  repliedMessage?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
