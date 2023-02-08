import plusIcon from '../../assets/images/plus.svg'
import styles from './index.module.css'

const AddButton = ({ ...rest }) => {
	return (
		<button {...rest} className={styles.button}>
			Criar
			<img src={plusIcon} alt='plus icon' />
		</button>
	)
}

export { AddButton }
