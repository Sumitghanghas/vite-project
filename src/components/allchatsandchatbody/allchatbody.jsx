import React, { useState } from "react";
import Chatareaheader from "../chatarea/chatareahader/chatareaheader";
import ChatArea from "../chatarea/chatsbody/chatbody";
import Footer from "../chatareafooter/footer";
import Header from "../header/header";
import Default from "../default/default";
import Sidebar from "../sideheader/sidebar";
import Status from "../sideheader/status";
import Channels from "../sideheader/channel";
import Communities from "../sideheader/communites";
import MetaAI from "../sideheader/metaai";
import Settings from "../sideheader/settings";
import Profile from "../sideheader/profile";
import Styles from "./allchatbody.module.css";
import AllChats from "../allchat/allchats";

export default function ChatApp() {
    const [activePage, setActivePage] = useState("chats");
    const [selectedChat, setSelectedChat] = useState(null);

    return (
        <div className={Styles.chatapp}>
            <div className={Styles.sidebar}>
                <div className={Styles.content}>
                    {activePage === "chats" && <Header/>}
                    {activePage === "chats" && <AllChats onSelectChat={setSelectedChat} />}
                    {activePage === "status" && <Status />}
                    {activePage === "channels" && <Channels />}
                    {activePage === "communities" && <Communities />}
                    {activePage === "metaai" && <Header/>}
                    {activePage === "metaai" && <AllChats onSelectChat={setSelectedChat} />}
                    {activePage === "settings" && <Settings />}
                    {activePage === "profile" && <Profile />}
                </div>
                <Sidebar setActivePage={setActivePage} />
            </div>

            <div className={Styles.chatArea}>
                {selectedChat ? (
                    <>
                        <Chatareaheader selectedChat={selectedChat} />
                        <ChatArea selectedChat={selectedChat} />
                        <Footer />
                    </>
                ) : (
                    <Default/>
                )}
            </div>
        </div>
    );
}
