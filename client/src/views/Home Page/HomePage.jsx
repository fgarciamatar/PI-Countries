import { useEffect } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filter from "../../components/Filters/Filter";
import style from "./Home.module.css";
import {getCountries} from "./../../redux/actions"
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => { //cuando se renderiza CardsContainer -> el estado activities se carga con las actividades
    dispatch(getCountries())
   }, [dispatch]);
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
