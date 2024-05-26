

function WaitList() {
  return (
    <section className="bg-secondary flex flex-col items-center md:items-start gap-16 py-24 px-4 sm:px-5 md:px-6 lg:px-16">
        <div className="w-fit mx-auto flex flex-col gap-2">
            <h2 className="text-black font-poppins text-2xl md:text-3xl text-center font-semibold uppercase">Join Our Wait list</h2>
            <p className="text-black text-opacity-70 font-poppins text-base font-normal text-center md:max-w-[70%] md:mx-auto">Join now and receive 5 free leads during our first month of launching!</p>
        </div>
        <form method="post" className="w-full md:max-w-[60%] md:mx-auto">
            <div className="w-full flex gap-2 items-center border-b border-black border-opacity-80 border-solid p-2">
                <input type="email" className="w-full font-poppins flex-1 text-lg text-black bg-transparent outline-none p-2 placeholder:font-poppins placeholder:text-base placeholder:text-black placeholder:text-opacity-60" placeholder="Enter email address" name="email" required />
                <button className="text-accent font-poppins text-lg font-semibold" type="submit">Join</button>
            </div>
        </form>
    </section>
  )
}

export default WaitList;