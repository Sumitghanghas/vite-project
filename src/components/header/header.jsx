import styles from "./header.module.css";
import { RiChatNewFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import {MdGroups} from "react-icons/md";
import { IoPeople } from "react-icons/io5";


export default function Header() {
    const [menu, setMenu] = useState(false);
    const [threemenu, setthreemenu] = useState(false);
    return (
        <>
        <div className={styles.headermain} onClick={()=>{
            setMenu(false);
            setthreemenu(false);
        }}>
        <div className={styles.header}>
                <div className={styles.chatsword}>
                    <h2>Chats</h2>
                </div>
                <div className={styles.icn}>
                    <RiChatNewFill onClick={(e)=>{
                       e.stopPropagation();
                        setMenu(!menu);
                        setthreemenu(false); 
                    }} />
                    <HiDotsVertical onClick={(e)=>{
                         e.stopPropagation();
                         setthreemenu(!threemenu); 
                         setMenu(false);
                         }}/>
                </div>
            </div>
            <div className={styles.searchBar}>
                <CiSearch className={styles.searchIcon} />
                <input 
                    type="text" 
                    placeholder="Search or start new chat" 
                    className={styles.searchInput}
                />
            </div>
            <div className={styles.filterbutton}> 
                <button className={styles.fbutton}>All</button>
                <button className={styles.fbutton}>Favourites</button>
                <button className={styles.fbutton}>Groups</button>
                <button className={styles.fbutton}>Unread</button>
            </div>
        </div>
        {menu && <div className={styles.menu}>
            <div className={styles.menuitem}>
                <ul className={styles.menuli}>
                    <li><IoPeople className={styles.mcommunit}/>New Group</li>
                <li><MdGroups className={styles.mcommunit}/>New Communities</li>
                </ul>
                </div>
        </div>}
        {threemenu && <div className={styles.threemenu}>
                <ul className={styles.threemenuli}>
                    <li>New Group</li>
                <li>Starred messages</li>
                <li>Selct chats</li>
                <li>Log out</li>
                <li className={styles.getw}>Get WhatsApp for Windows</li>
                </ul>
                </div>
}
        </>
    );
}
