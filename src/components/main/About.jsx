import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";


function About() {
  const socialMediaHandles = [
    {
        url: 'https://web.facebook.com/',
        icon: <FaFacebook className='w-4 h-4 text-white' />,
        bg: "#3b5998"
    },
    {
        url: 'https://web.facebook.com/',
        icon: <FaInstagram className='w-4 h-4 text-white' />,
        bg: "#E1306C"
    },
    {
        url: 'https://web.facebook.com/',
        icon: <FaTwitter className='w-4 h-4 text-white' />,
        bg: "#1da1f2"
    },
    {
        url: 'https://web.facebook.com/',
        icon: <FaWhatsapp className='w-4 h-4 text-white' />,
        bg: "#25D366"
    },
];
  return (
    <section id="about" className="bg-primary flex flex-col py-24 px-4 sm:px-5 md:px-6 lg:px-16">
         <div className="md:w-fit md:mx-auto mb-16">
            <h2 className="text-black font-poppins text-2xl md:text-3xl  font-semibold uppercase">About Us</h2>
            <hr className="w-20 md:w-24 h-[2px] md:mx-auto md:mt-1 bg-orange-500 rounded-lg" />
        </div>
        <p className="text-black text-opacity-70 font-roboto text-lg md:text-xl md:text-center">
            Fyndah is a business directory and management platform which aims to connect professionals and businesses to prospective
            customers, and provide businesses with tools to to manage and grow their businesses. Fyndah aims to simplify how you 
            find and engage with local businesses, ensuring a seamless experience that drives growth.
        </p>
        <div className="flex flex-col md:items-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            {/* <hr className="w-4 h-[2px] md:mt-1 bg-orange-500 rounded-lg" /> */}
            <h3 className="text-base font-poppins font-normal">Follow Us</h3>
          </div>
          <div className="flex items-center gap-4">
            {socialMediaHandles.map(({url,icon,bg}, index)=>(
              <div key={index} style={{background:bg}} className="p-1 rounded-full">
                <a href={url}>{icon}</a>
              </div>
            ))}
           
          </div>
        </div>
    </section>
  )
}

export default About