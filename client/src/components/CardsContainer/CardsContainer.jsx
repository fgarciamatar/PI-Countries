import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import { useEffect } from "react";
import {getCountries} from "../../redux/actions"
//este componente renderiza cada Card


const CardsContainer = () => {

  const countries = useSelector(state=>state.countries)
  const dispatch = useDispatch();

  //cuando se monta hace el dispatch para traer los paises
  useEffect(() => {
    dispatch(getCountries());
  },[]);

    return (
        <div className={style.container}>
            {countries.map((country)=>{
                return <Card 
                    countryId = {country.countryId}
                    nombre = {country.nombre}
                    imagen = {country.imagen}
                    continente = {country.continente}
                    capital = {country.capital}
                    subRegion = {country.subRegion}
                    area = {country.area}
                    poblacion = {country.poblacion}
                    key = {country.countryId}
            />
            })}
        </div>
    )
}

export default CardsContainer;