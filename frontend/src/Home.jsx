import React, { useState } from "react";
import { useUserContext } from "./UserContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
  const { setUser } = useUserContext();
  const [username, setUserName] = useState("");
  const [params] = useSearchParams();
  const navigate = useNavigate();

  function onChange(e) {
    setUserName((prev) => e.target.value);
  }

  function submit() {
    if (!username.trim()) return;

    setUser(username);
    setUserName((prev) => "");
    navigate("/chat");
  }

  return (
    <>
      {params.get("message") && (
        <p className="fixed text-white w-full bg-red-500 text-center py-5 tracking-wider uppercase">
          {params.get("message")}
        </p>
      )}
      <div className="mx-auto flex flex-col w-full items-center justify-center h-screen max-w-[500px] p-5 gap-5">
        <h1 className="text-center text-3xl ">Chat App</h1>
        <input
          type="text"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={onChange}
          className="border-[1px] border-gray-400 w-full outline-blue-100 p-2 rounded-md"
        />
        <button
          onClick={submit}
          className="bg-blue-500 text-white mr-auto py-2 px-5 rounded-md hover:opacity-50 duration-500 ease-linear"
        >
          Set Username
        </button>
      </div>
    </>
  );
};

export default Home;
