import React from "react";
import styles from "./allchats.module.css";

 export const chatData = [
    { id: 1, name: "Shail", profilePic: "https://randomuser.me/api/portraits/men/30.jpg", time:"2 mins ago",lastMessage: "Hello, khider hai?" },
    { id: 2, name: "Anya", profilePic: "https://randomuser.me/api/portraits/women/29.jpg",time:"5 Hours ago", lastMessage: "Jaldi aaja, wait kar rahi hoon." },
    { id: 3, name: "Aditya", profilePic: "https://randomuser.me/api/portraits/men/31.jpg",time:"2 Housr ago", lastMessage: "Kya gyan hai bhai?" },
    { id: 4, name: "Komal", profilePic: "https://randomuser.me/api/portraits/women/28.jpg",time:"1 min ago", lastMessage: "Badiya bhai, tu suna?" },
    { id: 5, name: "Lovely", profilePic: "https://randomuser.me/api/portraits/women/30.jpg",time:"just now", lastMessage: "Teri Insta ID kya hai?" },
    { id: 6, name: "Parveen", profilePic: "https://randomuser.me/api/portraits/men/33.jpg",time:"15 mins ago", lastMessage: "Phone utha le!" },
    { id: 7, name: "Jassi", profilePic: "https://randomuser.me/api/portraits/men/35.jpg",time:"8 Hours ago", lastMessage: "Raste me hoon, aa raha hoon." },
    { id: 8, name: "Tanya", profilePic: "https://randomuser.me/api/portraits/women/32.jpg",time:"1 Hour ago", lastMessage: "Clone bana liya kya?" },
    { id: 9, name: "Sachin", profilePic: "https://randomuser.me/api/portraits/men/37.jpg",time:"4 Hours ago", lastMessage: "Kitna kar liya?" },
    { id: 10, name: "Anu", profilePic: "https://randomuser.me/api/portraits/women/34.jpg",time:"9 Hours ago", lastMessage: "Kal aaunga!" },
    { id: 11, name: "ME", profilePic: "./sumitghanghas.jpg", lastMessage: "Done" }


];

export default function AllChats({ onSelectChat }) {
    return (
        <div className={styles.chatContainer}>
            {chatData.map(chat => (
                <div 
                    key={chat.id} 
                    className={styles.chatItem} 
                    onClick={() => onSelectChat(chat)}
                >
                    <img src={chat.profilePic} alt={chat.name} className={styles.profilePic} />
                    <div className={styles.chatDetails}>
                        <h4 className={styles.chatName}>{chat.name}</h4>
                        <p className={styles.lastMessage}>{chat.lastMessage}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
