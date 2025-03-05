import React, { useState } from "react";
import styles from "./chatbody.module.css";

export default function ChatArea({ selectedChat }) {
    const [messages, setMessages] = useState([
        { sender: "other", text: "Hey! What's up?" },
        { sender: "me", text: "All good, you say?" },
        { sender: "other", text: "Busy with work. What's new?" }
    ]);


    return (
        <div className={styles.chatArea}>
            <div className={styles.messages}>
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={msg.sender === "me" ? styles.myMessage : styles.otherMessage}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
