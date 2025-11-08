import { useEffect, useRef } from 'react';
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

export let Navbar = () => {
	let navbar = useRef();
	useEffect(() => {
		let length = window.innerWidth;
		// setInterval(() => {
		window.addEventListener('resize', () => {
			length = window.innerWidth;
			if (length > 768) {
				navbar.current.classList.replace(
					'block',
					'hidden'
				);
			} else {
				navbar.current.classList.replace(
					'hidden',
					'block'
				);
			}
		});
		if (length > 768) {
			navbar.current.classList.replace(
				'block',
				'hidden'
			);
		} else {
			navbar.current.classList.replace(
				'hidden',
				'block'
			);
		}
		// }, 500);
		// if (length > '768px') {
		// 	navbar.current.classList.replace(
		// 		'block',
		// 		'hidden'
		// 	);
		// } else {
		// 	navbar.current.classList.replace(
		// 		'hidden',
		// 		'block'
		// 	);
		// }
	});
	let navOpen = () => {
		navbar.current.classList.replace('out', 'in');
		navbar.current.focus();
	};
	let navClose = () => {
		navbar.current.classList.replace('in', 'out');
	};

	return (
		<nav className='shadow-xl flex items-center justify-between fixed w-[95%] left-[2.5%] top-5 sm:top-2 py-3 px-4 rounded-4xl bg-white z-50 '>
			<h5 className='text-2xl font-bold w-max'>
				optiveforte
			</h5>
			<button
				className='sm:hidden text-2xl hover:text-primary-3  active:scale-50 transition duration-500 cursor-pointer'
				onClick={navOpen}
			>
				<BsFillGrid1X2Fill />
			</button>
			<div className='hidden sm:flex items-center justify-between w-[75%]  md:w-[70%]'>
				<ul className='flex items-center justify-between w-[70%] md:w-[55%] [&>li]:capitalize [&>li]:transition [&>li]:duration-500 [&>li]:border [&>li]:border-transparent [&>li]:hover:border-b-black'>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#feautures'>feautures</a>
					</li>
					<li>
						<a href='#journey'>Journey</a>
					</li>
					<li>
						<a href='#faq'>FAQ</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
				<button className=' text-white bg-primary-2 text-sm px-4 py-3 rounded-3xl hover:bg-dark-black-500 transition duration-500 cursor-pointer'>
					Request a Quote
				</button>
			</div>
			<nav
				tabIndex={-1}
				ref={navbar}
				onBlur={navClose}
				className='slide out block absolute h-screen w-1/2 bg-white drop-shadow-xl -top-5 -right-3.5'
			>
				<button
					onClick={navClose}
					className='p-3 float-right hover:text-primary-2 active:scale-50 transition duration-500 cursor-pointer'
				>
					<RxCross2 className='text-3xl' />
				</button>
				<div className='w-full mt-20'>
					<ul className='flex text-center items-center justify-center flex-col w-full md:w-[55%] [&>li>a]:rounded-3xl [&>li]:capitalize [&>li>a]:py-3.5 [&>li>a]:transition [&>li>a]:duration-500  [&>li>a]:hover:bg-dark-black-500 [&>li>a]:hover:text-white [&>li]:w-full [&>li>a]:w-full [&>li>a]:block'>
						<li>
							<a
								className='w-full'
								href='#home'
							>
								Home
							</a>
						</li>
						<li>
							<a href='#feautures'>
								feautures
							</a>
						</li>
						<li>
							<a href='#journey'>Journey</a>
						</li>
						<li>
							<a href='#faq'>FAQ</a>
						</li>
						<li>
							<a href='#contact'>Contact</a>
						</li>
					</ul>
					<button className='w-full mt-6 text-white bg-primary-3 text-sm px-4 py-3 rounded-3xl hover:bg-dark-black-600 transition duration-500 cursor-pointer'>
						Request a Quote
					</button>
				</div>
			</nav>
		</nav>
	);
};
