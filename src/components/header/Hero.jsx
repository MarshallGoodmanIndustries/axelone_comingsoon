

function Hero() {
  const scrollDown = ()=>{
    const introduction = document.getElementById('introduction');
    introduction.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <section className=" relative z-20 h-[84dvh] flex flex-col items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-8 lg:max-w-[85%] lg:mx-auto">
        {/* <h3 className="text-black font-poppins text-lg md:text-xl font-medium tracking-wide">FYNDAH</h3> */}
        <h1 className="text-black font-poppins text-center text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold uppercase">FynDah Launches</h1>
        <h4 className="text-black font-poppins text-lg md:text-xl text-center">Discover Local Businesses Like Never Before</h4>
        <hr className="w-16 md:w-24 h-[2px] bg-accent rounded-lg" />
        <button onClick={scrollDown} className="bg-accent hover:bg-accentDark transition-all duration-300 text-primary font-poppins font-medium text-lg md:text-xl rounded-lg py-2 px-6 mt-8">Learn More</button>
    </section>
  )
}

export default Hero;