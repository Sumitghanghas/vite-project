import Styles from './status.module.css';
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import {chatData} from '../allchat/allchats';

export default function Status() {
  const recentStatuses = chatData.slice(0, 3);
  const viwed = chatData.slice(3, 6);

  return (
    <div className={Styles.statusContainer}>
      <div className={Styles.statusHeader}>
        <h1>Status</h1>
        <div className={Styles.statusIcons}>
          <FaPlus className={Styles.plusIcon} />
          <HiDotsVertical className={Styles.dotsIcon} />
        </div>
      </div>
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
          <h3>Viwed</h3>
      {viwed.map((status, index) => (
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
  );
}
