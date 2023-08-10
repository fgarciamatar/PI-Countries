import { useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filter from "../../components/Filters/Filter";
import style from "./Home.module.css";

const HomePage = () => {
  //Estados para el paginado
  
  return (
    <div className={style.container}>
      <div className={style.containerFilter}>
        <Filter />
      </div>
      <div className={style.containerCard}>
        <CardsContainer />
      </div>
    </div>
  );
};

export default HomePage;
