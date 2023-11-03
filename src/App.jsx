import Navbar from './Navbar'
import Card from './Card'
import data from './data.js'

function App() {
	let count = 1
	const cards = data.map((item) => (
		<Card key={count++} item={item} imageDirectory="../public/" />
	))
	return (
		<>
			<Navbar />
			<section className="cards">{cards}</section>
		</>
	)
}

export default App
