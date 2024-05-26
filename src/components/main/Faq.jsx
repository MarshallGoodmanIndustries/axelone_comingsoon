// import ScrollSurface from "../motionComponents/ScrollSurface";
import FaqItem from "../ui/FaqItem";


const Faq = () => {

    const faqs = [
        {
            question:"What is Fyndah?",
            answer:"Fyndah is a digital office for businesses, offering a comprehensive directory and tools to manage and grow your business."
        },
        {
            question:"When will Fyndah launch?",
            answer:"Fyndah is launching soon! Stay tuned for the exact date."
        },
        {
            question:"How can I benefit from Fyndah? ",
            answer:"By joining our platform, you'll receive validated leads, advanced business management tools, and much more to accelerate your growth."
        },
    ]

    return (
        // <ScrollSurface>
            <section className="bg-secondary py-24 px-4 sm:px-5 md:px-6 lg:px-16">
                <div className="w-full flex flex-col gap-16 lg:max-w-[80%] lg:mx-auto">
                    <div className="w-fit mx-auto">
                        <h2 className="text-black font-poppins text-2xl md:text-3xl font-semibold">FAQs</h2>
                        <hr className="w-8 h-[2px] md:mx-auto md:mt-1 bg-accent rounded-lg" />
                    </div>
                    <div className=" flex flex-col gap-6">
                        {faqs.map((faq,index)=>(
                            <FaqItem
                                key={index}
                                question={faq.question}
                                ans={faq.answer}
                            />
                        ))}
                    </div>
                </div>
            </section>
        // </ScrollSurface>
    )
}

export default Faq;