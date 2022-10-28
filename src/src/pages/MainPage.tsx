import React, { useEffect } from "react";
import { Search } from "../components/Search";
import { WeatherCard } from "../components/WeatherCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchWeatherByCoordinates } from "../store/actions/weatherActions";

export function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(
        fetchWeatherByCoordinates(
          position.coords.latitude,
          position.coords.longitude
        )
      );
    });
  }, [dispatch]);

  const { error } = useAppSelector((state) => state.weather);

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-bgClouds bg-no-repeat bg-cover bg-center'>
      {error && (
        <div
          className='w-full max-w-[450px] bg-[#ff208c] text-white absolute top-2 
          lg:top-10 p-4 rounded-md text-center'
        >
          {error}
        </div>
      )}

      {<Search></Search>}

      {<WeatherCard />}
      <a
        className='text-white/30'
        href='https://www.freepik.com/free-vector/evening-cloudy-sky-purple-background-with-group-cumulus-cirrus-clouds-flat-cartoon-illustration_16607919.htm#query=weather%20background&position=11&from_view=keyword'
      >
        Image by macrovector on Freepik
      </a>
    </div>
  );
}
