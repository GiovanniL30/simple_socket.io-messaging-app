import React, { useState } from "react";

const ChatBar = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="w-full flex gap-3">
      <input
        type="text"
        className="w-3/4 border-2 rounded-md p-2 outline-blue-200"
      />
      <button className="w-1/4 bg-blue-500 text-white rounded-md py-2">
        Send
      </button>
    </div>
  );
};

export default ChatBar;
