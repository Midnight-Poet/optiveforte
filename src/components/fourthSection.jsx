import { LuClipboardList } from "react-icons/lu";
import { BsPuzzle } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { TbAdjustmentsBolt } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { PiHandshake } from "react-icons/pi";

let items = [
	{
		title: 'Consultation & Energy Assessment',
		text: 'We begin with a free consultation to understand your energy needs, goals, and budget. An energy audit helps us design the perfect system for you',
		num: 1,
		icon: <LuClipboardList />,
	},
	{
		title: 'Custom System Design',
		text: 'Our team creates a tailored plan using the best components for maximum efficiency, reliability, and long-term savings',
		num: 2,
		icon: <BsPuzzle />,
	},

	{
		title: 'Component Selection & Sales',
		text: 'We source high-quality solar panels, inverters, batteries, and accessories—independent of manufacturer—to ensure the best fit for your home or business.',
		num: 3,
		icon: <BsCart3 />,
	},

	{
		title: 'Professional Installation & Assembly',
		text: 'From panel mounting to wiring and inverter setup, we carry out a seamless installation with precision and safety.',
		num: 4,
		icon: <TbAdjustmentsBolt />,
	},

	{
		title: 'Testing & Commissioning',
		text: 'Once installed, we test every component to guarantee optimal performance before handing the system over to you.',
		num: 5,
		icon: <CiCircleCheck />,
	},
	{
		title: 'Monitoring & Handover',
		text: 'We provide training on how to track energy production and usage, ensuring you get the most from your new system.',
		num: 6,
		icon: <PiHandshake />,
	},
];

export let FourthSection = () => {
	return (
		<section id="journey" className='p-3 mt-16 sm:px-10 md:px-15'>
			<header className='text-base text-center capitalize font-bold'>
				Your journey to solar energy: Our process in
				detail
				<hr className='w-1/5  my-2 mx-auto border-primary-4 border' />
			</header>
			<div className='p-2 mt-15 flex flex-wrap items justify-between [&>div:nth-child(2)]:-mt-8 [&>div:nth-child(2)]:h-max [&>div:nth-child(5)]:h-max [&>div:nth-child(5)]:-mt-8'>
				{items.map((item) => {
					return (
						<Card
							title={item.title}
							num={item.num}
							text={item.text}
							icons={item.icon}
						/>
					);
				})}
			</div>
		</section>
	);
};

export let Card = (params) => {
	return (
		<div className='border-2 border-dark-black-600 rounded-3xl mb-5 py-4 relative w-full sm:w-[31%]'>
			<div className='-ml-5 w-full bg-dark-black-200 rounded-3xl flex justify-between items-center'>
				<h4 className='py-3 px-9 sm:px-3 text-2xl sm:text-lg'>
					{params.title}
				</h4>
				<div className='h-[90px] content-center rounded-3xl py-5 px-4 bg-primary text-white text-2xl'>
					<p>{params.num}</p>
				</div>
			</div>
			<div className='my-7 px-4'>
				<p className="text-[15px]">{params.text}</p>
			</div>
			<div className="px-4 text-5xl text-primary">{params.icons}</div>
		</div>
	);
};
