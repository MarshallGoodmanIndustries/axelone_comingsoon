// import ScrollSurface from "../motionComponents/ScrollSurface";
import FaqItem from "../ui/FaqItem";


const Faq = () => {

    const faqs = [
        {
            question:"What is Fyndah?",
            answer:"Fyndah is a platform designed to connect businesses with potential customers through advanced lead generation, dynamic advertising, and efficient customer relationship management."
        },
        {
            question:"Who can use Fyndah?",
            answer:"Fyndah is targeted at small and medium-sized enterprises (SMEs), ad agencies, and individual users looking for products and services."
        },
        {
            question:"How does the lead generation system work?",
            answer:"Fyndah captures user search patterns to generate leads, which are then distributed to businesses based on user intent and business offerings."
        },
        {
            question:"What is the fastest finger system?",
            answer:"The fastest finger system is a competitive bidding process where businesses bid for leads, ensuring a dynamic and transparent marketplace."
        },
        {
            question:"How do businesses fund their wallets?",
            answer:"Businesses can fund their wallets using various payment methods such as credit/debit cards and bank transfers."
            },
        {
            question:"What messaging features are available?",
            answer:"Fyndah offers integrated messaging for user-business interactions, allowing businesses to manage and tailor their communication.."
        },
        {
            question:"How can businesses manage their ads?",
            answer:"Businesses can submit ad requests through the platform, and the super admin will set up and manage the ads."
        },
        {
            question:"What are the key goals of Fyndah?",
            answer:"Our goals include launching the MVP, acquiring users, generating revenue, enhancing user engagement, achieving customer satisfaction, and expanding our market presence."
        },
    ]

    return (
        // <ScrollSurface>
            <section className="bg-primary py-24 px-4 sm:px-5 md:px-6 lg:px-16">
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