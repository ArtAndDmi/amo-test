import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'

function App () {
	
	return (
		<div className="App">
			<Background/>
			<Header/>
			<Body/>
			<Footer/>
		</div>
	)
}

export default App
