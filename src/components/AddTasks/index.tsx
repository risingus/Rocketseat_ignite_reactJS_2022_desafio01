import { Input } from '../Input'
import styles from './index.module.css'

const AddTasks = () => {
	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<Input placeholder='Adicione uma nova Tarefa' required />
			</form>
		</div>
	)
}

export { AddTasks }
