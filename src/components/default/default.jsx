import Styles from "./defalut.module.css";
import Image from "../../assets/whatsapp.png";
export default function Default () {
  return (
    <div className={Styles.downloadcontainer}>
      <div className={Styles.imagecontainer}>
        <img src={Image} alt="WhatsApp" className={Styles.image} />
      </div>

      <h1>Download WhatsApp for Windows</h1>
      <p className={Styles.description}>
        Make calls, share your screen, and get a faster experience when you download the Windows app.
      </p>

      <button className={Styles.downloadbutton}>Download</button>

      <p className={Styles.footertext}>🔒 Your personal messages are end-to-end encrypted</p>
    </div>
  );
}
