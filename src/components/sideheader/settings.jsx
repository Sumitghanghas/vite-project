
import style from './setting.module.css';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdLock ,MdChat,MdHelp } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { FaKeyboard } from "react-icons/fa";



export default function Settings() {
  return (
    <div class={style.maincontainer}>
      <div className={style.header}>
        <span>Settings</span>
      </div>
      <div className={style.searchBar}>
        <CiSearch className={style.searchIcon} />
        <input
          type="text"
          placeholder="Search Settings"
          className={style.searchInput}
        />
      </div>
      <div className={style.namecontainer}>
        <img src="./sumitghanghas.jpg" className={style.profilePic} />
        <span className={style.name}>Sumit</span>
      </div>
      <div className={style.allsetting}>
        <div className={style.settinga}>
          <CgProfile/>
          <span className={style.bord}>Account</span>
        </div>
        <div className={style.settinga}> 
          <MdLock/>
          <span className={style.bord}>Privacy</span>
        </div>
        <div className={style.settinga}>
          <MdChat/>
          <span className={style.bord}>Chats</span>
        </div>
        <div className={style.settinga}>
          <IoNotifications />
          <span className={style.bord}>Notification</span>
        </div >
        <div className={style.settinga}>
          <FaKeyboard />
          <span className={style.bord}>Keyboard shortcuts</span>
        </div>
        <div className={style.settinga}>
        <MdHelp />
          <span className={style.bord}>Help</span>
        </div>
        <div className={style.settingas}>
          <IoExitOutline/>
          <span  className={style.bord}>Log Out</span>
        </div>
        
      </div>
    </div>

  )
}

