import { GoShieldCheck } from "react-icons/go";
import { PiPlantLight } from "react-icons/pi";
import { GiSewingNeedle } from "react-icons/gi";

let Card = (params) => {
	return (
		<div
			className={`mb-5 text-center flex items-center flex-col justify-between px-2 py-8 rounded-3xl text-white bg-${params.color}`}
		>
			<div className='text-4xl'>{params.icon}</div>
			<h3 className='text-3xl font-semibold my-4'>
				{params.title}
			</h3>
			<p className='text-sm'>
				{params.text}
			</p>
		</div>
	);
};
export let FirstSection = () => {
	return (
		<section className='flex flex-col items-center gap-2 md:gap-3 sm:flex-row p-3 mt-8 sm:px-10 md:px-15'>
			<Card
				title={'Reliable'}
				text={
					'Cut down electricity bills while enjoying reliable, efficient systems, long-term savings, and clean renewable energy for your home.'
				}
				color={'primary'}
				icon={<GoShieldCheck />}
			/>
			<Card
				title={'Personalized'}
				text={
					'Get solar solutions tailored to your unique needs, designed for maximum efficiency, long-lasting reliability, and true energy independence.'
				}
				color={'primary-3'}
				icon={<GiSewingNeedle />}
			/>
			<Card
				title={'Sustainable'}
				text={
					'Enjoy professional installation, reliable maintenance, and expert support ensuring your solar investment stays efficient, dependable, and worry-free.'
				}
				color={'primary-4'}
				icon={<PiPlantLight />}
			/>
		</section>
	);
};
