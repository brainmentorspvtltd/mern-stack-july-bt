import { Route, Routes } from "react-router-dom";
import Login from "../../modules/user/pages/Login";
import Register from "../../modules/user/pages/Register";
import { Home } from "../../modules/music/pages/Home";

const AppRoutes = ()=>{
    return (<>
        <Routes>
            <Route path="/login" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
              <Route path="/" element={<Home/>}/>
        </Routes>
    </>)

}

export default AppRoutes;