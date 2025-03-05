import Styles from './status.module.css';
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';
import { FaPen } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

// Dummy chatData array
const chatData = [
  { name: "Alice", profilePic: "./alice.jpg", time: "10:30 AM" },
  { name: "Bob", profilePic: "./bob.jpg", time: "9:15 AM" },
  { name: "Charlie", profilePic: "./charlie.jpg", time: "Yesterday" },
  { name: "David", profilePic: "./david.jpg", time: "2 days ago" },
  { name: "Eve", profilePic: "./eve.jpg", time: "3 days ago" },
  { name: "Frank", profilePic: "./frank.jpg", time: "1 week ago" },
];

export default function Status() {
  const recentStatuses = chatData.slice(0, 3);
  const viewed = chatData.slice(3, 6);
  const [menu, setMenu] = useState(false);

  return (
    <div className={Styles.statusContainer}>
      <div className={Styles.statusHeader}>
        <h1>Status</h1>
        <div className={Styles.statusIcons}>
          <FaPlus className={Styles.plusIcon} onClick={() => setMenu(!menu)} />
          <HiDotsVertical className={Styles.dotsIcon} onClick={() => setMenu(false)} />
        </div>
      </div>

      <div className={Styles.statusBody}>
        <div className={Styles.myStatusContainer}>
          <div className={Styles.myStatus}>
            <img src="./sumitghanghas.jpg" alt="My Status" className={Styles.profilePic} />
            <div className={Styles.text}>
              <h2>My Status</h2>
              <p>Tap to add status update</p>
            </div>
          </div>
        </div>

        <h3>Recent Updates</h3>
        {recentStatuses.map((status, index) => (
          <div key={index} className={Styles.statusItem}>
            <img src={status.profilePic} alt={status.name} className={Styles.profilePic} />
            <div className={Styles.statusDetails}>
              <div className={Styles.statusText}>
                <h4>{status.name}</h4>
                <p>{status.time}</p>
              </div>
            </div>
          </div>
        ))}

        <h3>Viewed</h3>
        {viewed.map((status, index) => (
          <div key={index} className={Styles.statusItem}>
            <img src={status.profilePic} alt={status.name} className={Styles.profilePic} />
            <div className={Styles.statusDetails}>
              <div className={Styles.statusText}>
                <h4>{status.name}</h4>
                <p>{status.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {menu && (
        <div className={Styles.menu}>
          <div className={Styles.menuItem}>
            <div className={Styles.menuLi}>
              <span><IoMdPhotos className={Styles.iconp} /> Photos & Videos</span>
              <span><FaPen className={Styles.icon} /> Text</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
