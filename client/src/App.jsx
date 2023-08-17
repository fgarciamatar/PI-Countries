import {HomePage, LandingPage, FormPage, DetailPage, About} from "./views"
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom"

  function App() {
    const location = useLocation().pathname; //ruta exacta en donde nos encontramos

  
  return (
    <div className="App">
      {location !== "/" &&  <NavBar/>} 
      {/* //si no esta en el Landing Page mostrara el NavBar */}
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
//en la ruta http://localhost:5173/ muestra componente Landing Page x
//en la ruta http://localhost:5173/home muestra componente Home x
//en la ruta http://localhost:5173/home/create muestra componente FormPage x
//*** /detail:idPais muestra componente Detail x 
//*** /home/about muestra componente About x