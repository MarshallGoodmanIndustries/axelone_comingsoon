import man from "../../assets/images/manLaptop.jpg";

function Introduction() {
  return (
    <section id="introduction" className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-24 px-4 sm:px-5 md:px-6 lg:px-16">
        <div className="flex flex-col gap-4 md:max-w-[50%]">
            <div>
                <h2 className="text-black font-poppins text-2xl md:text-3xl font-semibold uppercase">Introducing FYNDAH</h2>
                <hr className="w-20 md:w-24 h-[2px] bg-orange-500 rounded-lg" />
            </div>
            <p className="text-black text-opacity-70 font-roboto text-xl md:text-2xl">Fyndah is more than just a business directory. We&#39;re launching a digital office for businesses like yours, providing you
                with everything you need to grow and manage your business effectively.
            </p>
        </div>
        <div className="rounded-lg">
          <img src={man} className="w-full h-full object-cover rounded-lg" alt="man holding a laptop" />
        </div>
    </section>
  )
}

export default Introduction