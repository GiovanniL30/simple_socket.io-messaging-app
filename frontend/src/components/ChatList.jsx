import React, { useEffect, useRef, useState } from "react";
import ChatBlock from "./ChatBlock";
import { useUserContext } from "../UserContext";

const ChatList = ({ socket }) => {
  const { user } = useUserContext();
  const [messages, setMessages] = useState([]);
  const scroll = useRef(null);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);

      if (scroll.current) {
        scroll.current.scrollIntoView({ behavior: "smooth" });
      }
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
      <div ref={scroll}></div>
    </div>
  );
};

export default ChatList;
