import { useState, useEffect } from 'react';


function Countdown({deadline}) {
     const [days, setDays] = useState(0);
     const [hours, setHours] = useState(0);
     const [minutes, setMinutes] = useState(0);
     const [seconds, setSeconds] = useState(0);

     useEffect(()=>{
        const timerId = setInterval(()=>{
            const now = new Date().getTime();
            const difference = (deadline - now) / 1000;
            if(difference > 0){
                let days = Math.floor(difference / 60 / 60 / 24);
                let hours = Math.floor(difference / 60 / 60 % 24);
                let minutes = Math.floor((difference / 60) % 60);
                let seconds = Math.floor(difference % 60);
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }else{
                clearInterval(timerId);
            }
            return ()=> clearInterval(timerId);
        }, 1000);
     },[deadline]);
    
      return (
        <div className="opacity-10 overflow-x-clip absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 items-center justify-center w-full h-full">
            <div className="flex flex-col gap-1">
            <h2 className="font-poppins text-center text-5xl sm:text-6xl md:text-8xl font-semibold text-black animate-pulse">{days}</h2>
            <p className="text-gray-800 font-poppins text-center text-2xl sm:text-4xl md:text-5xl font-semibold animate-pulse">Days</p>
            </div>
            <div className="flex flex-col gap-1">
            <h2 className="font-poppins text-center text-5xl sm:text-6xl md:text-8xl font-semibold text-black animate-pulse">{hours}</h2>
            <p className="text-gray-800 font-poppins text-center text-2xl sm:text-4xl md:text-5xl font-semibold animate-pulse">Hours</p>
            </div>
            <div className="flex flex-col gap-1">
            <h2 className="font-poppins text-center text-5xl sm:text-6xl md:text-8xl font-semibold text-black animate-pulse">{minutes}</h2>
            <p className="text-gray-800 font-poppins text-center text-2xl sm:text-4xl md:text-5xl font-semibold animate-pulse">Minutes</p>
            </div>
            <div className="flex flex-col gap-1">
            <h2 className="font-poppins text-center text-5xl sm:text-6xl md:text-8xl font-semibold text-black animate-pulse">{seconds}</h2>
            <p className="text-gray-800 font-poppins text-center text-2xl sm:text-4xl md:text-5xl font-semibold animate-pulse">Seconds</p>
            </div>
        </div>
      );
    }

export default Countdown;