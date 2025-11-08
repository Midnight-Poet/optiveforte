import { useEffect, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import img1 from '../assets/media/img1.jpg';
import img2 from '../assets/media/img2.jpg';
import img3 from '../assets/media/img3.jpg';
import img4 from '../assets/media/img4.jpg';
import img5 from '../assets/media/img5.jpg';

export let comments = [
	{
		text: '“After installation, they didn’t just disappear. Their team checks in and helps with maintenance whenever I call. Truly reliable and customer-focused.”',
		name: 'Grace Eze',
		position: 'Borno, Maiduguri',
		profile: img1,
	},
	{
		text: '“They took time to understand my home’s energy needs before designing the system. The result fits my usage exactly — no wastage, no shortage. I love the professionalism.”',
		name: 'Aisha Bello',
		position: 'Borno, Maiduguri',
		profile: img2,
	},
	{
		text: '“I bought my panels and inverter from them last year, and they’re still performing like new. Genuine products and honest pricing — not easy to find these days.”',
		name: 'Tunde Adebayo',
		position: 'Borno, Maiduguri',
		profile: img3,
	},
	{
		text: '“The energy audit helped me see where I was wasting power. Their recommendations really improved my system’s performance and saved me money.”',
		name: 'Ibrahim Yusuf',
		position: 'Borno, Maiduguri',
		profile: img4,
	},
	{
		text: '“Since they installed my solar system, my electricity bills have dropped drastically. The setup was neat, and everything works perfectly. I even recommended them to my neighbour.”',
		name: 'Chinedu Okafor',
		position: 'Borno, Maiduguri',
		profile: img5,
	},
];

export let FifthSection = () => {
	let [count, setCount] = useState(0);
	const [fade, setFade] = useState(true);
	let items = useRef();

	useEffect(() => {
		let arr = items.current.children;
		// console.log(arr)

		arr[count].classList.replace('inactive', 'active');

		const interval = setInterval(() => {
			setFade(false);

			setTimeout(() => {
				setCount((count += 1));
				Object.values(arr).forEach((element) => {
					element.classList.replace(
						'active',
						'inactive'
					);
				});
				arr[count].classList.replace(
					'inactive',
					'active'
				);
				count == comments.length
					? setCount((count = 0))
					: null;
				setFade(true);
			}, 500);
		}, 3000);

		// arr[count]

		return () => clearInterval(interval);
	}, []);

	return (
		<section className='p-3 sm:px-10 md:px-40 mt-15 flex items-center justify-between'>
			<div
				className={`w-max h-max rounded-full overflow-hidden border-r-4 border-l-4 border-primary hidden sm:block`}
			>
				<div
					style={{
						backgroundImage: `url(${comments[count].profile})`,
					}}
					className={`fade ${
						fade ? 'in' : 'out'
					} bg-cover bg-center w-[300px] h-[300px]`}
				></div>
			</div>
			<div className='sm:w-[50%]'>
				<header className='text-base text-center capitalize font-bold'>
					Feedback full of energy
					<hr className='w-1/5  my-2 mx-auto border-primary-4 border' />
				</header>
				<h1 className='text-center text-4xl font-bold my-3'>
					Client’s reviews
				</h1>
				<div
					className={`fade ${
						fade ? 'in' : 'out'
					} transition duration-1000 my-5 border rounded-2xl px-4 py-3 border-dark-black-500`}
				>
					<p className='text-base text-dark-black-800'>
						{comments[count].text}
					</p>
					<div className='flex items-center justify-between'>
						{/* icon */}
						<h5 className='text-xl flex flex-col font-bold mt-5 ml-auto italic'>
							{comments[count].name}
							<span className='text-sm font-normal capitalize'>
								{comments[count].position}
							</span>
						</h5>
					</div>
				</div>
				<div
					className={`flex justify-between relative sm:hidden`}
					ref={items}
				>
					{comments.map((items) => {
						return (
							<div
								style={{
									backgroundImage: `url(${items.profile})`,
								}}
								className='transition-[border] duration-500 bg-contain justify-center flex items-center h-15 w-15 rounded-full inactive'
							></div>
						);
					})}
					<hr className='w-full border-2 -z-10 top-[45%] border-dark-black-500 absolute' />
				</div>
			</div>
		</section>
	);
};
