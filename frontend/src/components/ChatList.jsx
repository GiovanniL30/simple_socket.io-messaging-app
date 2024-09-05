import React, { useEffect, useState } from "react";
import ChatBlock from "./ChatBlock";
import { useUserContext } from "../UserContext";

const ChatList = ({ socket }) => {
  const { user } = useUserContext();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden w-full border-2 p-5  max-h-[500px] overflow-y-scroll gap-4">
      {messages.map((message) => (
        <ChatBlock
          fromMe={message.sender == user}
          text={message.text}
          sender={message.sender}
        />
      ))}
    </div>
  );
};

export default ChatList;
