import styles from './index.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt='' className={styles.logo} />
		</header>
	)
}

export { Header }
