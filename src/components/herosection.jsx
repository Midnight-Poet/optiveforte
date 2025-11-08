import img1 from '../assets/solar2.jpg';
import img2 from '../assets/img1.png';

export let HeroSection = () => {
	return (
		<section id='home' className='w-full h-[60vh] md:h-[70vh] content-center relative bg- flex'>
			<div className='absolute w-full h-full top-0 -z-20 fixed-image'>
                <img src={img1} className="h-full w-full left-0 sm:hidden" />
                <img src={img2} className="h-full w-full left-0 hidden sm:block" />
            </div>
			<div className='sm:mx-auto sm:mb-10 relative before p-6 bg-bg-1 sm:w-4/5 md:w-3/5 text-white rounded-tr-[200px] sm:rounded-4xl sm:text-center mt-auto'>
				<h1 className='text-[30px] font-bold'>
					Renewable Energy, <br className='sm:hidden' /> Built Around
					You
				</h1>
				<p className='text-base my-5 text-dark-black-400 sm:text-white font-normal'>
					Make the switch to solar and enjoy
					reliable, affordable power that benefits
					both your wallet and the planet. Our
					customized systems are designed to
					reduce your electricity costs, increase
					efficiency, and give you energy
					independence - your path to sustainable
					energy begins here.
				</p>
			</div>
		</section>
	);
};
