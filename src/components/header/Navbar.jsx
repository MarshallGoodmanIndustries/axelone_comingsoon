import logo from '../../assets/images/logobgremove.png';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";


function Navbar() {
    const socialMediaHandles = [
        {
            title: 'Facebook',
            url: 'https://web.facebook.com/',
            icon: <FaFacebook className='w-4 h-4 text-white' />,
            bg: "#3b5998"
        },
        {
            title: 'Instagram',
            url: 'https://web.facebook.com/',
            icon: <FaInstagram className='w-4 h-4 text-white' />,
            bg: "#E1306C"
        },
        {
            title: 'Twitter',
            url: 'https://web.facebook.com/',
            icon: <FaTwitter className='w-4 h-4 text-white' />,
            bg: "#1da1f2"
        },
        {
            title: 'Whatsapp',
            url: 'https://web.facebook.com/',
            icon: <FaWhatsapp className='w-4 h-4 text-white' />,
            bg: "#25D366"
        },
    ];
  return (
    <nav className='relative z-50 bg-white flex items-center justify-between px-4 w-full h-[16dvh] sm:px-5 md:px-6 lg:px-16 '>
        <div className='max-w-32 h-auto transform -translate-x-3'>
            <img src={logo} className='w-full h-full object-cover' alt="company logo" />
        </div>
        <ul className='flex items-center gap-4'>
            {socialMediaHandles.map(({title, url, icon, bg}) => (
                <li key={title} style={{background:bg}} className='p-1 rounded-full cursor-pointer'>
                    <a href={url} target="_blank" className='cursor-pointer' rel="noreferrer">
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar