import React, { useState } from "react";
import { useUserContext } from "../UserContext";

const ChatBar = ({ socket }) => {
  const { user } = useUserContext();
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (!message.trim()) return;

    socket.emit("message", { sender: user, text: message });
    setMessage("");
  }

  return (
    <div className="w-full flex gap-3">
      <input
        type="text"
        className="w-3/4 border-2 rounded-md p-2 outline-blue-200"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="w-1/4 bg-blue-500 text-white rounded-md py-2"
      >
        Send
      </button>
    </div>
  );
};

export default ChatBar;
