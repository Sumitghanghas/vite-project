
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css"
import React , {useState} from "react";

export default function(){
    const Navigate = useNavigate();
    const [formData,setformData] = useState({username:"",password:""});
    const handleChange = (e)=>{
        setformData({...formData,[e.target.name]:e.target.value});
    }
    const handlesubmit = async (e)=>{
        e.preventDefault();
        console.log(formData);
        try{
            const response = await fetch("http://localhost:3002/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert(data.message);
            Navigate("/");
        }
        catch(err){
        alert("Signup faild");
        }
    };

    return (
        <div className={styles.container}>
            <div >
                <form onSubmit={handlesubmit} className={styles.for}>
                <h2 style={{ color: "white" }}>WhatsApp Signup</h2>
                    <input type="text" name="username" placeholder="username" onChange={handleChange} required/>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Psasword" onChange={handleChange} required/>
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    )
    
} 