import Countdown from "../ui/Countdown";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Header() {
  const deadline = new Date("JUN 1, 2024").getTime();
  return (
    <header className="min-h-dvh relative bg-secondary">
        <Navbar />
        <Hero />
        {/* countdown timer */}
        <Countdown deadline={deadline} />
    </header>
  )
}

export default Header;