import React from "react";

const ChatBlock = ({ fromMe, text }) => {
  return (
    <div
      className={`w-fit max-w-[80%]  px-3 py-1 rounded-md  text-white break-words ${
        fromMe ? "ml-auto bg-blue-500" : "bg-gray-500"
      }`}
    >
      {text}
    </div>
  );
};

export default ChatBlock;
