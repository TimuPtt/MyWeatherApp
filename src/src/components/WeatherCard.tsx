import React from "react";
import { WiBarometer } from "react-icons/wi";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";
import { ImSpinner8 } from "react-icons/im";
import { useAppSelector } from "../hooks/redux";

export function WeatherCard() {
  const date = new Date();

  const { data, loading } = useAppSelector((state) => state.weather);

  let icon;

  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className='text-[#787BEC]' />;
      break;
    case "Clear":
      icon = <IoMdSunny className='text-[#F5B6C0]' />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className='text-[#787BEC]' />;
      break;
    case "Snow":
      icon = <IoMdSnow className='text-[#787BEC]' />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm />;
      break;
  }

  return (
    <div className='w-full bg-black/20 max-w-[450px] min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6'>
      {loading ? (
        <div className='w-full h-full flex justify-center items-center'>
          <ImSpinner8 className='text-white text-5xl animate-spin' />
        </div>
      ) : (
        <div>
          <div className='flex items-center gap-x-10'>
            <div className='text-[87px]'>{icon}</div>
            <div>
              <div className='text-2xl font-semibold'>
                {data.name}, {data.sys.country}
              </div>
              <div>
                {date.getUTCDate()}/{date.getUTCMonth()}/{date.getFullYear()}
              </div>
            </div>
          </div>
          <div className='my-20'>
            <div className='leading-none font-light'>
              <div className='flex flex-col items-center justify-center'>
                <div className='capitalize'>{data.weather[0].description}</div>
                <div className='flex justify-center items-center'>
                  <div className='text-[144px]'>
                    {data.main.temp.toFixed(0)}
                  </div>
                  <div className='text-4xl'>&deg;C</div>
                </div>
                <div className='flex items-center gap-x-2'>
                  <div>
                    <BsThermometer />
                  </div>
                  <div>Feels like {data.main.feels_like.toFixed(0)}&deg;C</div>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-auto max-w-[378px] flex flex-col gap-y-6'>
            <div className='flex justify-between'>
              <div className='flex items-center gap-x-2'>
                <div>
                  <BsEye />
                </div>
                <div>
                  Visibility{" "}
                  <span className='ml-2'>{data.visibility / 1000} km</span>
                </div>
              </div>
              <div className='flex items-center gap-x-2'>
                <div>
                  <BsWind />
                </div>
                <div>
                  Wind <span className='ml-2'>{data.wind.speed} m/s</span>
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-x-2'>
                <div>
                  <BsWater />
                </div>
                <div>
                  Humidity <span className='ml-2'>{data.main.humidity} %</span>
                </div>
              </div>
              <div className='flex items-center gap-x-2'>
                <div>
                  <WiBarometer />
                </div>
                <div>
                  Pressure{" "}
                  <span className='ml-2'>{data.main.pressure} hPa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
