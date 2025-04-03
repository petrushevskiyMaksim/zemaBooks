import { Header } from 'widgets';
import { Footer } from 'widgets';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<div className='text-4xl font-bold bg-amber-700'>Block Top</div>
				<div className='text-4xl font-bold bg-amber-700'>Block News</div>
				<div className='text-4xl font-bold bg-amber-700'>Block Novels</div>
				<div className='text-4xl font-bold bg-amber-700'>Block About</div>
				<div className='text-4xl font-bold bg-amber-700'>
					Block MasterClass{' '}
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
