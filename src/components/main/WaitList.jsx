import wailist_img from '../../assets/images/waitlist.png';

function WaitList() {
  return (
    <section id="waitlist" className="bg-secondary flex flex-col sm:items-center md:flex-row md:items-start md:justify-evenly gap-16 py-24 px-4 sm:px-5 md:px-6 lg:px-16">
        <div className="md:max-w-[30%] flex flex-col gap-2 ">
          <h2 className="text-black font-poppins text-2xl md:text-3xl font-semibold uppercase">Exclusive early access offer</h2>
          <p className="text-black text-opacity-70 font-roboto text-lg font-normal ">Join our waitlist now and receive 5 free leads</p>
          <div className='w-full max-w-[14rem] mt-4 sm:self-center md:self-start'>
            <img src={wailist_img} alt="waitlist illustration" className='w-full h-full object-cover' />
          </div>
        </div>
        <form method="post" className="w-full sm:max-w-[30rem] flex flex-col items-center  gap-4">
          <h3 className="text-black font-poppins text-lg font-medium capitalize self-start sm:self-center md:self-start">Get Started for free</h3>
          <input className="bg-primary border border-black border-opacity-70 border-solid rounded-lg px-2 py-3 w-full outline-none text-black text-opacity-80" type="text" name="fullName" placeholder="Full name" required />
          <input className="bg-primary border border-black border-opacity-70 border-solid rounded-lg px-2 py-3 w-full outline-none text-black text-opacity-80" type="email" name="email" placeholder="Email address" required />
          <input className="bg-primary border border-black border-opacity-70 border-solid rounded-lg px-2 py-3 w-full outline-none text-black text-opacity-80" type="tel" name="phone" placeholder="Phone number" required />
          <input className="bg-primary border border-black border-opacity-70 border-solid rounded-lg px-2 py-3 w-full outline-none text-black text-opacity-80" type="text" name="city" placeholder="City" required />
          <button type="submit" name="newsletter_btn" className="w-full bg-accent hover:bg-accentDark transition-all duration-300 text-primary font-poppins font-medium text-base sm:text-lg md:text-xl rounded-lg py-3 px-4">Join</button>
        </form>
    </section>
  )
}

export default WaitList;