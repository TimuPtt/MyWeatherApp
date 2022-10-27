import React, { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Search } from "../components/Search";
import { WeatherCard } from "../components/WeatherCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchWeather } from "../store/actions/weatherActions";

export function MainPage() {
  const dispatch = useAppDispatch()
  

  useEffect(() => {
    dispatch(fetchWeather("chicago"))
  }, [])

  const {data, loading, error} = useAppSelector(state => state.weather!)

  return (
    <div className='container mx-auto pt-10'>
      <Navigation/>

      <Search></Search>

      <WeatherCard weatherData={data!}/>
    </div>
  );
}
