import React, { useState } from "react";
import Draggable from 'react-draggable';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChatOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "How can I help you?" },
      ]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      sendMessage(userInput);
      setUserInput("");
    }
  };

  const sendMessage = async (text) => {
    setMessages([...messages, { type: "user", text }]);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: text }),
    });
    const data = await response.json();
    setMessages((prev) => [...prev, { type: "bot", text: data.answer }]);
  };

  const handlePredefinedMessageClick = (text) => {
    sendMessage(text);
  };

  const predefinedMessages = ["Name", "Apply", "Hi", "Help"];

  return (
    <Draggable>
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`transition-transform transform ${
          isOpen ? "scale-100" : "scale-0"
        } flex flex-col bg-white border border-gray-300 rounded-lg shadow-lg w-72 max-w-full overflow-hidden`}
      >
        <div
          className="bg-blue-600 text-white text-center py-2 cursor-pointer"
          onClick={handleChatOpen}
        >
          Chat with us
        </div>
        <div className="p-4 flex flex-col space-y-3 max-h-80 overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-100 text-gray-800 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {predefinedMessages.map((text, index) => (
              <button
                key={index}
                className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm hover:bg-blue-500 hover:text-white"
                onClick={() => handlePredefinedMessageClick(text)}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
        <form
          className="p-2 border-t border-gray-300 flex items-center space-x-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
      <button
        className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 fixed bottom-4 right-4"
        onClick={handleChatOpen}
      >
        <img src="/chatbot.svg" height={60} width={60} alt="Chatbot Icon" />
      </button>
    </div>
    </Draggable>
  );
};

export default ChatBot;
