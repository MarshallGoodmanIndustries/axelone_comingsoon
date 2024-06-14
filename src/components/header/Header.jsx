// import Countdown from "../ui/Countdown";
import { useWindowSize } from '@react-hook/window-size'
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'

// components
import Hero from "./Hero";
import Navbar from "./Navbar";

function Header() {
  // const deadline = new Date("JUN 5, 2024").getTime();
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  
  useEffect(()=>{
    setTimeout(()=>{
      setShowConfetti(false);
    }, 10000)
  }, []);

  return (
    <header className="min-h-dvh overflow-x-clip relative bg-secondary">
        <Confetti width={width} height={height} tweenDuration={700} run={showConfetti} />
        <Navbar />
        <Hero />
        {/* countdown timer */}
        {/* <Countdown deadline={deadline} /> */}
    </header>
  )
}

export default Header;