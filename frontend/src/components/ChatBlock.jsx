import React from "react";

const ChatBlock = ({ fromMe, text, sender }) => {
  return (
    <div className={`w-fit max-w-[80%]  ${fromMe ? "ml-auto" : ""}`}>
      <p className={`font-semibold ${fromMe ? "text-right" : ""}`}>{sender}</p>
      <div
        className={` px-3 py-1 rounded-md  text-white break-words ${
          fromMe ? "bg-blue-500" : "bg-gray-500"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatBlock;
