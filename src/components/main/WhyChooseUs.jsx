

function WhyChooseUs() {
    const reasons = [
        {
            index: 1,
            title: "Accurate Data Verification",
            description: "Ensure you’re connecting with genuine prospects.",
        },
        {
            index: 2,
            title: "Real-Time Lead Delivery",
            description: "Receive leads instantly to capitalize on every opportunity.",
        },
        {
            index: 3,
            title: "Advanced Business Management",
            description: "Tools to streamline your operations and enhance productivity.",
        },
    ];
  return (
    <section className="bg-primary flex flex-col items-center md:items-start gap-16 py-24 px-4 sm:px-5 md:px-6 lg:px-16">
        <div className="w-fit mx-auto">
            <h2 className="text-black font-poppins text-2xl md:text-3xl font-bold uppercase">Why Choose Us?</h2>
            <hr className="w-20 md:w-24 h-[2px] md:mx-auto md:mt-1 bg-orange-500 rounded-lg" />
        </div>
        <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-between xl:justify-evenly gap-10 lg:gap-4">
            {reasons.map(({index,title,description})=>(
                <div key={index} className="flex gap-2 w-full md:max-w-[22rem] 2xl:max-w-[24rem]">
                    <p className="text-xl font-poppins font-semibold text-accent">0{index}</p>
                    <hr className="bg-black bg-opacity-50 rounded-lg h-[2px] w-full max-w-8 mt-3"/>
                    <div>
                        <h2 className="text-xl md:text-2xl font-poppins font-semibold text-black text-opacity-80">{title}</h2>
                        <p className="text-lg md:text-xl font-roboto font-normal text-black text-opacity-70 mt-2">{description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default WhyChooseUs