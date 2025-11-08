import solarInstallation from '../assets/solar10.jpg';
import systemAssembly from '../assets/solar13.jpg';
import componentSales from '../assets/solar7.jpg';
import repairs from '../assets/solar1.jpg';
import consultation from '../assets/solar3.jpg';
import { GiHammerSickle } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa6";

let Card = (params) => {
	return (
		<div
			className='bg-image h-[400px] rounded-3xl overflow-hidden my-3 sm:m-0'
			style={{
				backgroundImage: `url(${params.image})`,
			}}
		>
			<div className='h-full w-full bg-trans  text-white  p-4 content-end'>
				<div className='h-15 w-15 text-2xl rounded-full bg-white text-black flex items-center justify-center'>{params.icon}</div>
				<h3 className='text-2xl my-5 font-bold'>{params.title}</h3>
				<p className='text-sm font-light'>{params.text}</p>
			</div>
		</div>
	);
};

export let SecondSection = () => {
	return (
		<section id='feautures' className='mt-8 p-3 sm:px-10 md:px-15'>
			<header className='text-base capitalize font-bold'>
				Solar enery solution tailored to your needs
				<hr className='w-1/5 my-2 border-primary-4 border' />
			</header>
			<div className='sm:flex justify-between items-center'>
				<h1 className='text-4xl font-bold my-3 '>
					From Components to Installation — We
					Handle It All.
				</h1>
				{/* <div className='w-[40%]'>
					<p className='text-lg'>
						<span>“</span>Everything was
						individually tailored to our needs
						so that it works optimally and
						efficiently for us.<span>”</span>
					</p>
					<h5 className='italic text-right my-5'>
						Christian Benkowski - Customer of
						Gelb Solar					</h5>
				</div> */}
			</div>
			<div className='block sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:gap-2 disgrid mt-8'>
				<Card
					image={solarInstallation}
					title={'Solar Installation'}
					text={
						'Professional solar installation for homes, businesses, and communities — built for efficiency, safety, and long-term savings from day one.'
					}
					icon={<GiHammerSickle />}
					className='bg-red-300'
				/>
				<Card
					image={systemAssembly}
					title={'System Assembly'}
					text={'Complete solar assembly — panels, wiring, and inverters — all tailored to your unique energy needs.'}
					icon={<FaCogs />}
				/>
				<Card
					image={componentSales}
					title={'Component Sales'}
					text={'Reliable solar panels, inverters, batteries, and accessories — trusted parts for new builds or upgrades.'}
					icon={<FaCarBattery />}
				/>
				<Card
					image={repairs}
					title={'Maintenance & Repairs'}
					text={'Keep your system efficient with expert maintenance, repairs, and optimization that protect your investment.'}
					icon={<HiOutlineWrenchScrewdriver />}
				/>
				<Card
					image={consultation}
					title={'Consultation & System Design'}
					text={'Get tailored energy audits and system designs that fit your home, budget, and goals — choose your best solar solution with confidence.'}
					icon={<FaChartLine />}
				/>
			</div>
		</section>
	);
};
