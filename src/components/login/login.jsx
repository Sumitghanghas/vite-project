import { useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

export default function Login({ setauth }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState(""); // ✅ State for error message

    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Reset error on input change
    };

    const handleClick = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:3002/api/auth/loging", { // ✅ Keep API route as is
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
                credentials: "include", // ✅ Ensures cookies are sent
            });
    
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setauth(true); 
                navigate("/whatsapp");
            } else {
                throw new Error(data.error || "Login failed"); // ✅ Handles API errors properly
            }
        } catch (err) {
            setError(err.message); // ✅ Store error message in state
        }
    };

    return (
        <div className={styles.container}>
            <div>
                <form className={styles.fom} onSubmit={handleClick}> {/* ✅ Kept class name unchanged */}
                    <h2 style={{ color: "white" }}>WhatsApp Login</h2>
                    {error && <p style={{ color: "red" }}>{error}</p>} {/* ✅ Displays error message */}

                    <input type="text" name="username" placeholder="Enter your phone number" onChange={handelChange} required />
                    <input type="password" name="password" placeholder="Enter password" onChange={handelChange} required />
                    <button type="submit">Login</button>
                    <p>
                        Don't have an account?{" "}
                        <span style={{ cursor: "pointer", color: "lightblue" }} onClick={() => navigate("/signup")}>
                            Sign up
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
}
