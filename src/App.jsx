import './App.css';
import { Contact } from './components/contact';
import { FifthSection } from './components/fifthSection';
import { FirstSection } from './components/firstsection';
import { Footer } from './components/footer';
import { FourthSection } from './components/fourthSection';
import { HeroSection } from './components/herosection';
import { Navbar } from './components/navbar';
import { SecondSection } from './components/secondSection';
import { SixthSection } from './components/sixthSection';
import { ThirdSection } from './components/thirdSection';

function App() {
	return(
		<main>
			<Navbar />
			<HeroSection />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<Contact />
			<Footer />
		</main>
	)
}

export default App;
