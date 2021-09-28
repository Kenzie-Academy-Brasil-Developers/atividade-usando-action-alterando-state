import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeName } from '../../store/modules/user/actions'
import './styles.css'

const UserCard = () => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')

	return (
		<main>
			<input
				type='text'
				onChange={(e) => setName(e.target.value)}
				placeholder='Nome'
			/>
			<button onClick={() => dispatch(changeName(name))}>Mudar nome</button>
		</main>
	)
}

export default UserCard
