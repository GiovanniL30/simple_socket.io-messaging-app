import React from "react";
import { useUserContext } from "./UserContext";
import { Navigate } from "react-router-dom";
import ChatList from "./components/ChatList";
import ChatBar from "./components/ChatBar";

const Chat = () => {
  const { user } = useUserContext();

  if (!user)
    return <Navigate to="/?message=Please enter your user name first" />;

  return (
    <div className="mx-auto max-w-[1440px] p-5 mt-3">
      <h1 className="text-center font-bold text-2xl">Chats</h1>
      <div className="flex flex-col gap-10 mt-10">
        <ChatList />
        <ChatBar />
      </div>
    </div>
  );
};

export default Chat;
