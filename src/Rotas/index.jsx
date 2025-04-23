import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { Series } from "../pages/Series";
import { User } from "../pages/User";
import { Conteudo } from "../components/Conteudo";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} >
                <Route index element={<Conteudo type="all"/>} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/user" element={<User />} />
            </Route>
        </Routes>
    );
}