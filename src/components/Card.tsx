import day from '../assets/day.svg'
const Card = () => {
     return (
          <div>
               <div className="min-h-screen flex items-center justify-center">
                    <div className="flex flex-col bg-white rounded-[24px] p-4 w-[20rem]">
                         <div className="font-bold text-xl text-center">Sydney</div>
                         <div className="text-sm text-gray-500 text-center">Thursday 10 May 2020</div>
                         <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24">
                              <img src={day} alt="" width={300} height={300} />
                         </div>
                         <div className="flex flex-row items-center justify-center mt-6">
                              <div className="font-medium text-6xl">24°</div>
                              <div className="flex flex-col items-center ml-6">
                                   <div>Cloudy</div>
                                   <div className="mt-1">
                                        <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
                                        <span className="text-sm font-light text-gray-500">28°C</span>
                                   </div>
                                   <div>
                                        <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
                                        <span className="text-sm font-light text-gray-500">20°C</span>
                                   </div>
                              </div>
                         </div>
                         <div className="flex flex-row justify-between mt-6">
                              <div className="flex flex-col items-center">
                                   <div className="font-medium text-sm">Wind</div>
                                   <div className="text-sm text-gray-500">9k/h</div>
                              </div>
                              <div className="flex flex-col items-center">
                                   <div className="font-medium text-sm">Humidity</div>
                                   <div className="text-sm text-gray-500">68%</div>
                              </div>
                              <div className="flex flex-col items-center">
                                   <div className="font-medium text-sm">Visibility</div>
                                   <div className="text-sm text-gray-500">10km</div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Card
