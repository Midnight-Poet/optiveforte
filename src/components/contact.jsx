export let Contact = () => {
	return (
		<section id="contact" className='p-3 bg-primary-4 text-white sm:px-10 md:px-15 flex flex-col sm:flex-row items-center justify-between mb-25'>
			<div className="w-full sm:w-[40%]">
                <header className='text-base text-center capitalize font-bold sm:text-left'>
					request a quote
					<hr className='w-1/5 sm:m-0 my-2 mx-auto border-primary-2 border' />
				</header>
				<h1 className="capitalize text-3xl font-bold my-3">
					talk about how we can help you reduce
					your energy
				</h1>
				<p className="capitalize">
					costs and successfully manage your
					carbon emissions with investment free
					solar technologies.
				</p>
			</div>
			<form action='' className="text-black w-full sm:w-2/5 sm:-mb-20 md:-mb-30 [&>input]:bg-white [&>input]:mb-4 [&>input]:p-2 [&>input]:rounded-[5px] [&>input]:outline-none [&>input]:w-full bg-primary px-3 py-5 rounded-xl mt-6">
                <input type="text" name="" placeholder="Enter Full Name" />
                <input type="email" name="" placeholder="Enter Email" />
                <input type="tel" name="" placeholder="Enter Phone Number" />
                <textarea placeholder="Enter Your Message" className="w-full h-30 rounded-[5px] p-2 bg-white outline-none"></textarea>
                <button type="submit" className=" text-white mt-4 bg-primary-3 px-6 py-3 rounded-3xl hover:bg-dark-black-500 transition duration-500 cursor-pointer">Send Message</button>
            </form>
		</section>
	);
};
