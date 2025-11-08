import vid from '../assets/media/video.mp4'
import { GrIntegration } from "react-icons/gr";
import { TbTargetArrow } from "react-icons/tb";

export let ThirdSection = () => {
	return (
		<section className='px-3 py-8 sm:px-10 md:px-15 mt-10 bg-dark-black-50 flex flex-col sm:flex-row items-center justify-between'>
			<div className='w-full sm:w-[45%]'>
				<header className='text-base capitalize font-bold'>
					World without waste
					<hr className='w-1/5 my-2 border-primary-4 border' />
				</header>
				<h1 className='text-3xl font-semibold capitalize'>
					why use optiveforte?
				</h1>
				<div className='w-full'>
					<Div
						title={'Tailored Solutions'}
						text={
							'No one-size-fits-all here. We carefully select the best parts from trusted brands to create a solar system that perfectly matches your home, giving you dependable, efficient energy every day.'
						}
						icons={<TbTargetArrow />}
					/>
					<Div
						title={'All-in-One Service'}
						text={
							'We deliver more than panels—we deliver peace of mind. From the initial consultation through planning and installation to commissioning – we take care of every detail. You can sit back and relax while we organize everything for you.'
						}
						icons={<GrIntegration />}
					/>
				</div>
			</div>
			<div className='w-full my-5 sm:m-0 sm:w-1/2'>
				<video src={vid} controls className='rounded-3xl'></video>
			</div>
		</section>
	);
};

let Div = (params) => {
	return (
		<div className='flex items-start justify-between mt-5 gap-3 w-full'>
			<div className='h-[50px] w-[50px] rounded-full text-2xl text-primary flex justify-center items-center p-2 border-2 border-primary'>
				{params.icons}
			</div>
			<div className='w-[90%]'>
				<h4 className='text-2xl font-normal mb-2'>
					{params.title}
				</h4>
				<p className='text-sm'>{params.text}</p>
			</div>
		</div>
	);
};
