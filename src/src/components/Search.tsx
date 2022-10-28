import React, { ChangeEvent, FormEvent, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useAppDispatch} from "../hooks/redux";
import { fetchWeather } from "../store/actions/weatherActions";

export function Search() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(fetchWeather(value));
  };

  return (
    <form
      className='w-full h-16 bg-black/20 max-w-[450px] rounded-full backdrop-blur-[32px] mb-6'
      onSubmit={submitHandler}
    >
      <div className='h-full relative flex items-center justify-between p-2'>
        <input
          className='flex-1 bg-transparent outline-none placeholder:text-white text-white font-light pl-6 h-full '
          type='text'
          placeholder='Search by city'
          value={value}
          onChange={changeHandler}
        ></input>
        <button className='bg-[#9F62BB] hover:bg-[#8146A1] w-20 h-12 rounded-full flex justify-center items-center transition outline-none'>
          <IoMdSearch className='text-2xl text-white' />
        </button>
      </div>
    </form>
  );
}
