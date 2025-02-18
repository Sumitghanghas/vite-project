import { MdChat, MdGroups, MdSettings } from "react-icons/md";
import { LuCircleDot } from "react-icons/lu"; 
import { RiChatVoiceLine } from "react-icons/ri";
import { ImSpinner2 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import styles from "./sidebar.module.css";

export default function Sidebar({ setActivePage }) {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li className={styles.iconContainer} onClick={() => setActivePage("chats")}>
          <MdChat className={styles.icon} />
          <span className={styles.tooltip}>Chats</span>
        </li>
        <li className={styles.iconContainer} onClick={() => setActivePage("status")}>
          <LuCircleDot className={styles.icon} /> 
          <span className={styles.tooltip}>Status</span>
        </li>
        <li className={styles.iconContainer} onClick={() => setActivePage("channels")}>
          <RiChatVoiceLine className={styles.icon} />
          <span className={styles.tooltip}>Channels</span>
        </li>
        <li className={styles.iconContainer} onClick={() => setActivePage("communities")}>
          <MdGroups className={styles.icon} />
          <span className={styles.tooltip}>Communities</span>
        </li>
        <li className={styles.iconContainer} onClick={() => setActivePage("metaai")}>
          <ImSpinner2 className={styles.iconmeta}/>
          <span className={styles.tooltip}>Meta AI</span>
        </li>
      </ul>
      <ul className={styles.bottomMenu}>
        <li className={styles.iconContainer} onClick={() => setActivePage("settings")}>
          <MdSettings className={styles.icon} />
          <span className={styles.tooltip}>Settings</span>
        </li>
        <li className={styles.iconContainer} onClick={() => setActivePage("profile")}>
          <CgProfile className={styles.icon} />
          <span className={styles.tooltip}>Profile</span>
        </li>
      </ul>
    </div>
  );
}
