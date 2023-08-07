import {HomePage, LandingPage, FormPage, DetailPage, About} from "./views"
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom"

  function App() {
    const location = useLocation().pathname;

  
  return (
    <div className="App">
      {location !== "/" &&  <NavBar/>}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route exact path="/home/create" element={<FormPage />} />
        <Route path="/detail/:idPais" element={<DetailPage />} />
        <Route path="/home/about" element={<About />} />
      </Routes>
   
    </div>
  );
}

export default App;
