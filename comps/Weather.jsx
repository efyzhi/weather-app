import React from "react";
import Image from "next/image";
import styles from '/styles/Weather.module.css';


const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.box}>
      <div className="relative flex justify-between pt-12">
        <div className="items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className={styles.fig}>{data.weather[0].main}</p>
        </div>
        <p className={styles.ttemp}>{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      <div className={styles.bottom}>
        <p className={styles.bottomName} >Weather in {data.name}</p>
        <div className={styles.bott}>
          <div>
            <p className={styles.bottOne}>
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className={styles.bottTwo}>Feels Like</p>
          </div>
          <div>
            <p className={styles.bottOne}>{data.main.humidity}%</p>
            <p className={styles.bottTwo}>Humidity</p>
          </div>
          <div>
            <p className={styles.bottOne}>
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className={styles.bottTwo}>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
