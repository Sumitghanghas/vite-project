import { useState, useEffect, useRef } from "react";
import style from "./profile.module.css";
import { FaCheck, FaPen } from "react-icons/fa6";

export default function Profile() {
  const [user, setUser] = useState({});
  const [about, setAbout] = useState("Hey there! I am using WhatsApp.");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/auth/profilepic", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditName = () => setIsEditingName(true);
  const handleEditAbout = () => setIsEditingAbout(true);
  const handleNameChange = (event) => setUser({ ...user, username: event.target.value });
  const handleAboutChange = (event) => setAbout(event.target.value);
  const handleEditName1 = () => setIsEditingName(false);
  const handleEditAbout1 = () => setIsEditingAbout(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilepic", file);

    try {
      const response = await fetch("http://localhost:3002/api/auth/upload", {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
      } else {
        console.error("Error uploading image:", data.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={style.maincontainer}>
      <div className={style.pheader}>
        <h2>Profile</h2>
      </div>

      <div className={style.imagecontainer} onClick={handleImageClick}>
        <img src={`http://localhost:3002${user.profilepic}`} className={style.imagep} alt="Profile" />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={style.photo}
          ref={fileInputRef}
          style={{ display: "none" }} 
        />
      </div>

      <div className={style.yourname}>
        <span>Your name</span>
        <div className={style.name}>
          {isEditingName ? (
            <input
              type="text"
              value={user.username}
              onChange={handleNameChange}
              className={style.input}
            />
          ) : (
            <span>{user.username}</span>
          )}
          {isEditingName ? (
            <FaCheck className={style.icon} onClick={handleEditName1} />
          ) : (
            <FaPen className={style.icon} onClick={handleEditName} />
          )}
        </div>
        <div className={style.underyourname}>
          <span>
            This is not your username or PIN. This name will be visible to your
            WhatsApp contacts.
          </span>
        </div>
      </div>

      <div className={style.pabout}>
        <span>About</span>
        <div className={style.abouticon}>
          {isEditingAbout ? (
            <input
              type="text"
              value={about}
              onChange={handleAboutChange}
              className={style.input}
            />
          ) : (
            <span>{about}</span>
          )}
          {isEditingAbout ? (
            <FaCheck className={style.icon} onClick={handleEditAbout1} />
          ) : (
            <FaPen className={style.icon} onClick={handleEditAbout} />
          )}
        </div>
      </div>
    </div>
  );
}
