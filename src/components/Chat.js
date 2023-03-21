import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("Avatar 1");

  const [messages, setMessages] = useState({
    "Avatar 1": [],
    "Avatar 2": [],
    "Avatar 3": [],
  });
  const [messageInput, setMessageInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Envoie le message à l'API et récupère la réponse de l'avatar
    const avatarResponse = await sendMessage(messageInput, selectedAvatar);

    // Stocke le message dans l'objet approprié
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      newMessages[selectedAvatar] = [
        ...newMessages[selectedAvatar],
        { sender: "user", content: messageInput },
        { sender: "avatar", content: avatarResponse },
      ];
      return newMessages;
    });

    // Efface l'entrée du message
    setMessageInput("");
  };

  return (
    <div className="chat-body">
      <div className="chat-wrapper">
        <div className="chat-container">
          <div className="chat-header">
            <h3>Avatar sélectionné : {selectedAvatar}</h3>
          </div>
          <div className="chat-body">
            <ul className="message-list">
              {messages[selectedAvatar]?.map((message, index) => (
                <li
                  key={index}
                  className={`message-item message-item-${
                    message.sender === "user" ? "user" : "avatar"
                  }`}
                >
                  {message.content}
                </li>
              ))}
            </ul>
          </div>
          <div className="chat-footer">
            <form onSubmit={handleSubmit} className="message-form">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="message-input"
                placeholder="Tapez votre message..."
              />
              <button type="submit" className="message-submit">
                Envoyer
              </button>
            </form>
            <select
              value={selectedAvatar}
              onChange={(e) => setSelectedAvatar(e.target.value)}
              className="form-select"
            >
              <option value="Avatar 1">Avatar 1</option>
              <option value="Avatar 2">Avatar 2</option>
              <option value="Avatar 3">Avatar 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

async function sendMessage(message, avatarId) {
  try {
    const response = await fetch(
      `http://localhost:3001/avatars/${avatarId}/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error("Failed to send message:", error);
    return "Une erreur s'est produite lors de l'envoi du message.";
  }
}

export default Chat;
