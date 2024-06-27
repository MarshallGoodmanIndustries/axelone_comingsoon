import curvedLines from "../../assets/images/curvedLines.svg";

const Explore = () => {
  return (
    <section className="relative flex justify-center items-center flex-col gap-4 w-full py-24 px-4 sm:px-5 md:px-6 lg:px-16 md:p-8 bg-[#0a1128]">
        <img src={curvedLines} className="absolute top-0 left-0 w-full h-full object-cover opacity-30" alt="curved lines" />
        <button className=" relative z-10 bg-accent hover:bg-accentDark font-poppins font-normal text-primary text-lg md:text-xl px-8 py-2 rounded-lg transition-all duration-300 cursor-pointer"><a href="https://fyndah.com/" target="_blank">Explore Fyndah</a></button>
    </section>
  )
}

export default Explore