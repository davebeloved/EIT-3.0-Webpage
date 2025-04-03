import React, {useEffect} from "react";
import Eit2025 from "./page/Eit2025";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const App = () => {

  const {pathname} = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(pathname !== '/eit2025'){
      navigate('/eit2025')
    }
  }, [pathname])
  

  return (
    <div>
      <Routes>
        <Route path="/eit2025" element={<Eit2025 />} />
      </Routes>
      {/* <Eit2025 /> */}
      
    </div>
  );
};

export default App;
