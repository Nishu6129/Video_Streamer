import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Chatslice";
import { generateRandomName, generateRandomSentence } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");

  // Correctly access 'messages' from Redux store
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomSentence(),
        })
      );
      console.log(chatMessages);
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 px-2 border border-black h-[500px] w-full bg-rose-50 rounded-md overflow-y-scroll flex flex-col-reverse">
        {/* Check if chatMessages is an array before calling map */}
        {Array.isArray(chatMessages) && chatMessages.length > 0 ? (
          chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))
        ) : (
          <div>No messages yet</div>
        )}
      </div>
      <form className="w-full border border-black  p-2 ml-2"  onSubmit={(e)=> {
        e.preventDefault();
        dispatch(
            addMessage({
                name: "Nischal",
                message: liveMessage,
            })
        )
        console.log(liveMessage);
      }}> 
        <input
          className="w-96 border border-black rounded-3xl p-1 bg-gray-100"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
       
        />
        <button className="px-2 mx-2   rounded-sm">✈️</button>
      </form>
    </>
  );
}

export default LiveChat;
