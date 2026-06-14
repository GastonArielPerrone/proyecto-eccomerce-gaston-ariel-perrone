import { Outlet } from "react-router-dom";
import { Header } from "../componentes/Header/Header";
import { Footer } from "../componentes/Footer/Footer";

export const PublicLayout =() => {
    return <>
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
}