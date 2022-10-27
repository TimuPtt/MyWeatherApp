import { ServerResponse } from "../../models/models";
import axios from "../../axios";
import { IWeatherData } from "../../models/models";
import { weatherSlice } from "../slices/weatherSlice";
import { AppDispatch } from "..";

export const fetchWeather = (city: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(weatherSlice.actions.fetching());
      const responce = await axios.get<IWeatherData>(
        `/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      console.log(responce.data.name);
      dispatch(weatherSlice.actions.fetchSuccess(responce.data));
    } catch (e) {
      dispatch(weatherSlice.actions.fetchError(e as Error));
    }
  };
};
