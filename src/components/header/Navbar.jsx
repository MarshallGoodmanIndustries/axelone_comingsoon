import logo from '../../assets/images/logobgremove.png';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";


function Navbar() {
    const socialMediaHandles = [
        {
            title: 'Facebook',
            url: 'https://www.facebook.com/AxelOne-109011149455599',
            icon: <FaFacebook />
        },
        {
            title: 'Instagram',
            url: 'https://www.Twitter.com/AxelOne-109011149455599',
            icon: <FaInstagram />
        },
        {
            title: 'Twitter',
            url: 'https://www.Twitter.com/AxelOne-109011149455599',
            icon: <FaTwitter />
        },
    ];
  return (
    <nav className='flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 lg:max-w-[85%] lg:mx-auto'>
        <div className='w-48 h-auto transform -translate-x-3'>
            <img src={logo} className='w-full h-full object-cover' alt="company logo" />
        </div>
        <ul className='flex items-center gap-4'>
            {socialMediaHandles.map((handle) => (
                <li key={handle.title} className='p-2 border border-solid border-black rounded-full'>
                    <a href={handle.url} target="_blank" rel="noreferrer">
                        {handle.icon}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar