import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import { FiArrowLeft } from 'react-icons/fi'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft color='white' />
			</button>
			{/* {userprofile} */}
			<Hamburger />
		</header>
	)
}

export default Header
