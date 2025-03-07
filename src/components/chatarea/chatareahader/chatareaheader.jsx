    import React from "react";
    import Styles from "./chatareaheader.module.css";
    import { CiSearch } from "react-icons/ci";
    import { HiDotsVertical } from "react-icons/hi";
    import { FaVideo } from "react-icons/fa6";

    export default function Chatareaheader({ selectedChat }) {
        return (
            <div className={Styles.container}>
                <img src= {`http://localhost:3002${selectedChat?.profilepic}`} alt="Profile" className={Styles.profile} />
                <div className={Styles.username}>
                    <h3>{selectedChat?.username}</h3>
                </div>
                <div className={Styles.lasticon}>
                    <FaVideo className={Styles.videoicon} />
                    <CiSearch className={Styles.chatserch} />
                    <HiDotsVertical />
                </div>
            </div>
        );
    }
