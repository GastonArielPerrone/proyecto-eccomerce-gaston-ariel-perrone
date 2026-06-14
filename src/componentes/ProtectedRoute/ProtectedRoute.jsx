import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
    const {user, loading} = useAuth();

    if(loading) return <h2>Cargando...</h2>

    if(!user) return <Navigate to="/admin/login" />

    return children;
}