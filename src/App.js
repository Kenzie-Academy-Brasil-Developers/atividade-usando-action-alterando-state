import { useSelector } from 'react-redux'
import './App.css'
import UserCard from './components/UserCard'

function App() {
	const name = useSelector((state) => state.user)
	return (
		<div className='App'>
			<header className='App-header'>
				<div>Seu nome é: {name.name}</div>
				<UserCard />
			</header>
		</div>
	)
}

export default App
