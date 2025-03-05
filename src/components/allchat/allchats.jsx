import React, { useState, useEffect } from "react";
import styles from "./allchats.module.css";


// export const chatData = [];

export default function AllChats({ onSelectChat }) {
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await fetch("http://localhost:3002/api/message/user", {
                    method: "GET",
                    credentials: "include",
                });
                const data = await response.json();
                setChatData(data);                            
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        };

        fetchChats();
    }, []);

  
    return (
        <div className={styles.chatContainer}>
            {
                chatData.map(chat => (
                    <div
                        key={chat._id}
                        className={styles.chatItem}
                        onClick={() => onSelectChat(chat)}
                    >
                        <img src={`http://localhost:3002${chat.profilepic}`} alt={chat.name} className={styles.profilePic} />
                        <div className={styles.chatDetails}>
                            <h4 className={styles.chatName}>{chat.username}</h4>
                            {/* <p className={styles.lastMessage}>{chat.lastMessage}</p> */}
                        </div>
                    </div>
                ))
            }
        </div>
    );

}
