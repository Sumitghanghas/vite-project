import React from 'react';
import styles from './footer.module.css';
import { MdKeyboardVoice } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { LuSticker } from "react-icons/lu";


export default function Footer() {
    return (
        <div className={styles.footer}>
            <FaPlus className={styles.plusicon} />
            <div className= {styles.inputcontainer}>
            <LuSticker className={styles.stickericon} />
                <input type="text" placeholder="Type a message" className={styles.inputbox} />
              
            </div>
            <MdKeyboardVoice className={styles.voiceicon} />
        </div>
    )
}