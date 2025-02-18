import styles from "./header.module.css";
import { RiChatNewFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";


export default function Header() {
    return (
        <>
        <div className={styles.headermain}>
        <div className={styles.header}>
                <div className={styles.chatsword}>
                    <h2>Chats</h2>
                </div>
                <div className={styles.icn}>
                    <RiChatNewFill />
                    <HiDotsVertical />
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
            
        </>
    );
}
