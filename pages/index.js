import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../comps/Weather";
import Spinner from "../comps/Spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  if (loading) {
    return <Spinner />;
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

    const fetchWeather = (e) => {
      e.preventDefault();
      setLoading(true);
      axios.get(url)
      .then((res) => {
        setWeather(res.data);
      });
      setCity("");
      setLoading(false);
    };

    return (
      <div>
        <Head>
          <title>Weather App</title>
          <meta name="description" content="Weather app using NextJs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/25 z-[1]" />
        <Image
          src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
          layout="fill"
          className="object-fill"
        />

        <div className="relative flex justify-between item-center max-w-[500px] w-[100%] m-auto pt-4 px-4 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
          >
            <div>
              <input
                onChange={handleCityChange}
                className="bg-transparent border-none text-white focus:outline-none text-2xl "
                type="text"
                placeholder="Search City"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}
