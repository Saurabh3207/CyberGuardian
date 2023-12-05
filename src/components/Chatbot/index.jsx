import React, { useState } from "react";
import axios from "axios";
import styles from "./ChatBot.module.css";
import Header from "../Header";
import Footer from "../Footer";
import userAvatar from "../assets/images/user1.png";
import botAvatar from "../assets/images/bot.png";
import svgImage from "../assets/images/bot.svg";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your Chatbot! Ask me anything.",
      sender: "Chatbot"
    }
  ]);

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSend = async event => {
    event.preventDefault();

    const newMessage = {
      message: input,
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/predict", {
        user_input: input
      });

      const botResponse = response.data.bot_response;

      setMessages([
        ...newMessages,
        {
          message: botResponse,
          sender: "Chatbot"
        }
      ]);
    } catch (error) {
      console.error("Error communicating with Flask API:", error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="styles.hero-image">
        <img src={svgImage} alt="SVG Image" />
      </div>
      <div className={styles.Chatbot}>
        <div className={styles["response-area"]}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                message.sender === "Chatbot"
                  ? styles["chatbot-message"]
                  : styles["user-message"]
              } ${message.isError ? styles["error-message"] : ""}`}
            >
              {message.sender === "user" && (
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className={styles["user-avatar"]}
                />
              )}
              {message.sender === "Chatbot" && (
                <img
                  src={botAvatar}
                  alt="Bot Avatar"
                  className={styles["bot-avatar"]}
                />
              )}
              <div className={styles.messageContent}>
                {message.message}
                <div className={styles.timestamp}>{message.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["prompt-area"]}>
          <input
            type="text"
            placeholder="Send a message..."
            value={input}
            onChange={handleChange}
            className={styles["input-box"]}
          />
          <button className={styles.submit} type="submit" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chatbot;
