import { FaPaperPlane } from 'react-icons/fa';

export let Footer = () => {
	return (
		<footer className='px-3 py-5 md:py-10 sm:px-10 md:px-15 mt-20 md:mt-40 bg-primary-4 text-white flex flex-wrap items-start justify-between'>
			<div className='w-[55%] sm:w-2/6'>
				<h5 className='font-bold text-2xl'>
					optiveforte
				</h5>
				<p className='text-sm mt-5'>
					Solar energy’s exceptional synergies
					with energy storage, electric vehicles
					and smart grids means the industry works
					on the frontline of technology and
					system change to deliver.
				</p>
				<button className=' text-white mt-4 bg-primary-2 px-6 py-3 rounded-3xl hover:bg-dark-black-500 transition duration-500 cursor-pointer'>
					Request a Quote
				</button>
				{/* <button>Request a Quote</button> */}
			</div>
			<div className='w-2/5 sm:w-1/4'>
				<h4 className='font-bold text-xl'>
					Subscribe to our newslater.
				</h4>
				<p className='text-sm mt-5'>
					Subscribe email and get recent news and
					updates
				</p>
				<div className='w-full p-1 bg-white flex items-center justify-between text-black my-3 rounded-3xl'>
					<input type='email' name='' className='h-max w-5/6 outline-none ml-3' />
					<div  className='p-2 text-2xl h-max w-max rounded-full bg-primary-3 text-white'>
						<FaPaperPlane />
					</div>
				</div>
			</div>
			<div className='w-1/2 mt-6 sm:w-[10%] sm:m-0'>
				<ul className='list-none capitalize text-base mb-4 [&>li]:mb-2 pl-5 sm:p-0	'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>feautures</a>
					</li>
					<li>
						<a href='#'>Journey</a>
					</li>
					<li>
						<a href='#'>Comments</a>
					</li>
					<li>
						<a href='#'>FAQ</a>
					</li>
					<li>
						<a href='#'>contact</a>
					</li>
				</ul>
			</div>
			<div className='mt-6 sm:w-[18%] sm:m-0'>
				<p>Carl-Benz-Ring 31, 35423 Lich</p>
				<p>06404 / 80 38 900</p>
				<p>info@gelb-solar.de</p>
				<div>
					<a href=''></a>
					<a href=''></a>
					<a href=''></a>
				</div>
			</div>
		</footer>
	);
};
