import { useEffect, useRef } from 'react';

let qa = [
	{
		questions: 'How much can I really save with solar?',
		answers:
			'Your savings depend on factors like your energy consumption, the size of your solar system, and local electricity rates. Many homeowners see a significant reduction in monthly bills—sometimes up to 60–80%—while businesses benefit from long-term cost stability. Over time, your system pays for itself and continues to generate free, clean energy, making solar one of the smartest financial investments you can make.',
	},
	{
		questions: 'What happens if it’s cloudy or rainy?',
		answers:
			'Solar panels don’t need direct sunlight to work—they still generate electricity on cloudy or rainy days, although at reduced capacity. To make sure you always have power, your system can be paired with battery storage, which stores excess energy produced on sunny days for use at night or during poor weather. This ensures a reliable and steady energy supply year-round.',
	},
	{
		questions: 'How long does installation take?',
		answers:
			'The actual installation process for most homes usually takes 2–5 days, depending on system size and complexity. Before that, we handle consultations, site assessments, and permit approvals, which can take a few weeks. For businesses or larger projects, timelines may be longer, but we keep you updated at every step. Our goal is to make the transition smooth, efficient, and hassle-free.',
	},
	{
		questions: 'Do you handle maintenance and repairs?',
		answers:
			'Yes, we provide full maintenance and repair services. This includes regular system inspections, performance monitoring, panel cleaning, and troubleshooting if issues arise. We also offer service packages to ensure your system continues running at maximum efficiency. By letting us take care of the upkeep, you can enjoy peace of mind knowing your investment is protected for the long term.',
	},
	{
		questions: 'Can I add battery storage later?',
		answers:
			'Absolutely. Many customers choose to start with just solar panels and add storage later as their needs grow or as battery prices continue to fall. Our systems are designed to be flexible, so you can easily integrate a battery pack at any time. This upgrade allows you to store surplus energy, use it at night, and further reduce reliance on the grid.',
	},
];

export let SixthSection = () => {
	return (
		<section id='faq' className='bg-white p-3 pb-15 mt-15 sm:px-10 md:px-15 flex flex-col sm:flex-row items-start justify-between'>
			<div className='sm:w-[40%]'>
				<header className='text-base text-center capitalize font-bold sm:text-left mb-5'>
					Have Questions? We’ve Got Answers.
					<hr className='w-1/5  my-2 mx-auto sm:mx-0 border-primary-4 border' />
				</header>
				<p>
					Do you have any further questions? We're
					happy to help! Whether in person or by
					phone, we're available to assist you
					with any issues you may have.
				</p>
			</div>
			<div className='bg- py-5 sm:py-0  sm:w-[55%] w-full'>
				{qa.map((items) => {
					let item = useRef();
					let reveal = () => {
						let parent =
							item.current.parentNode;
						parent.parentNode.focus();
						parent.classList.replace(
							'h-0',
							'h-[220px]'
						);
						parent.classList.replace(
							'-z-10',
							'z-10'
						);
					};
					let hide = () => {
						let parent =
							item.current.parentNode;
						setTimeout(() => {
							if (
								Object.values(
									parent.classList
								)
									.toString()
									.includes('h-0')
							) {
								parent.classList.replace(
									'z-10',
									'-z-10'
								);
							}
						}, 400);

						parent.classList.replace(
							'h-[220px]',
							'h-0'
						);
					};
					return (
						<div
							className='h-max  my-3 relative'
							tabIndex={-1}
							onBlur={hide}
						>
							<div className='flex items-center justify-between p-2 border border-dark-black-200 rounded'>
								<h4>{items.questions}</h4>
								<button
									className='bg-dark-black-400 px-2 py-1 rounded text-white hover:bg-dark-black-600 cursor-pointer transition duration-500'
									onClick={reveal}
								>
									+
								</button>
							</div>

							<div className='h-0 overflow-auto absolute top-full -z-10 bg-dark-black-200 text- px-4 py-5 shadow-2xl rounded-2xl transition-[height] duration-500'>
								<p
									className=' transition duration-500'
									ref={item}
								>
									{items.answers}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};
