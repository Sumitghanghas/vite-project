import Style from './channel.module.css';
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';

export default function Channels() {
  const channels = [
    { name: 'Royal Challengers Bengaluru', icon: 'code', follower: '8.6M followers', profilePic: "./rcb.png" },
    { name: 'WhatsApp', icon: 'basketball-ball', follower: '223.6M followers',profilePic: "./whatsappchannel.png" },
    { name: 'Dainik Jagran', icon: 'film', follower: '4.7M followers',profilePic: "./danik.jpg" },
    { name: 'ABP News', icon: 'chart-line', follower: '15.6M followers',profilePic: "./abp.png" },
    { name: 'HK unfiltered', icon: 'globe', follower: '8.1M followers',profilePic: "./hk.jpeg" },
  ];

  return (
    <div className={Style.maincontainer}>
      <div className={Style.header}>
        <h2>Channels</h2>
        <FaPlus className={Style.plusIcon} />
      </div>
      <div className={Style.headertext}>
        <p>Stay updated on your favorite topics</p>
        <p className={Style.para}>Find channels to follow below</p>
      </div>
      <div className={Style.channelbody}>
        {channels.map(channel => (
          
          <div key={channel.name} className={Style.channelItem}>
            <img src={channel.profilePic} className={Style.profilePic}/>
           
            <div className={Style.channelText}>
              <span>{channel.name}</span>
              <p>{channel.follower}</p>
            </div>
            <button className={Style.followbtn}>Follow</button>
          </div>
        ))}
        <button className={Style.disbutton}>Discover More</button>
      
      </div>
    
    </div>
  );
}
