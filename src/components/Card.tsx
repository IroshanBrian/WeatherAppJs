import React, { useState } from 'react';
import night from "../assets/night.svg";
import cloudy from "../assets/cloudy.svg";

const Card: React.FC = () => {
     const [city, setCity] = useState("");
     const [error, setError] = useState(false);
     const [weatherData, setWeatherData] = useState<any>(null);

     const checkWeather = (e: React.FormEvent) => {
          e.preventDefault();
          fetch(
               `https://api.weatherbit.io/v2.0/current?city=${city}&key=06da9fb7a75a489a814d003a3e299b4e`
          )
               .then(res => res.json())
               .then((data) => {
                    setWeatherData(data);
               })
               .catch((err) => {
                    setError(true);
                    console.error(err);
               });
     };

     const citySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedCity = e.target.value;
          if (selectedCity === "default") {
               setError(true);
          } else {
               setError(false);
               setCity(selectedCity);
          }
     };


     return (
          <div>
               <div className="min-h-screen flex items-center justify-center flex-col gap-3">
                    <div className="w-[20rem] rounded-[24px] z-40">
                         <form onSubmit={checkWeather} className="">
                              {error && (
                                   <div className="p-1 text-center rounded-lg bg-red-100 mb-3" id="errorMsg">
                                        <label className="text-red-700 font-semibold">Please Select A Valid City</label>
                                   </div>
                              )}
                              <div className="flex gap-3">
                                   <select
                                        id="states"
                                        onChange={citySelect}
                                        className="w-45 rounded-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   >
                                        <option value="default">Choose a City 😉</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Gampaha">Gampaha</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Anuradhapura">Anuradhapura</option>
                                   </select>
                                   <button
                                        type="submit"
                                        className="bg-white w-20 rounded-[10px] font-semibold"
                                   >
                                        Check
                                   </button>
                              </div>
                         </form>
                    </div>
                    {weatherData && (
                         <div className="flex flex-col bg-white rounded-[24px] p-4 w-[20rem]">
                              <div className="font-bold text-xl text-center">{weatherData.data[0].city_name}</div>
                              <div className="text-sm text-gray-500 text-center">{weatherData.data[0].datetime}</div>
                              <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24">
                                   {weatherData.data[0].weather.description === 'Scattered clouds' ? <img src={cloudy} alt="weather icon" width={270} height={270} /> : <img src={night} alt="weather icon" width={300} height={300} />}

                              </div>
                              <div className="flex flex-row items-center justify-center mt-6">
                                   <div className="font-medium text-6xl">{weatherData.data[0].temp}°</div>
                                   <div className="flex flex-col items-center ml-6">
                                        <div>{weatherData.data[0].weather.description}</div>
                                        <div className="mt-1">
                                             <span className="text-sm">
                                                  <i className="far fa-long-arrow-up"></i>
                                             </span>
                                             <span className="text-sm font-light text-gray-500">{weatherData.data[0].temp}°C</span>
                                        </div>
                                        <div>
                                             <span className="text-sm">
                                                  <i className="far fa-long-arrow-down"></i>
                                             </span>
                                             <span className="text-sm font-light text-gray-500">{weatherData.data[0].temp}°C</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex flex-row justify-between mt-6">
                                   <div className="flex flex-col items-center">
                                        <div className="font-medium text-sm">Wind</div>
                                        <div className="text-sm text-gray-500">{weatherData.data[0].wind_spd}k/h</div>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <div className="font-medium text-sm">Humidity</div>
                                        <div className="text-sm text-gray-500">{weatherData.data[0].rh}%</div>
                                   </div>
                                   <div className="flex flex-col items-center">
                                        <div className="font-medium text-sm">Visibility</div>
                                        <div className="text-sm text-gray-500">{weatherData.data[0].vis}km</div>
                                   </div>
                              </div>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Card;
