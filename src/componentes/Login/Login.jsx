import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value,});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await login(formData.email, formData.password);
        console.log("Inicio de sesión exitoso");
        navigate("/admin", { replace: true });
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
    };

    return (
        <div className="login-container">
        <img src="../public/GAPsport_logo.png" alt="Logo de GAPsport"></img>
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
        </div>
    )
}