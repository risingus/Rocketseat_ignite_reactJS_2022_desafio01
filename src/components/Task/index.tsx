import { useTasks } from '../../hooks/useTasks'
import { ReactComponent as TrashSvg } from '../../assets/trash.svg'
import { ReactComponent as CheckedIcon } from '../../assets/check.svg'
import styles from './index.module.css'

export const Task = ({ id = '', text = '', completed = false }) => {
	const { changeTaks, deleteTasks } = useTasks()

	return (
		<div className={styles.task}>
			<div>
				<input
					type='checkbox'
					id='task'
					name='task'
					onChange={() => changeTaks(id)}
					checked={completed}
				/>
				<label htmlFor='task'>{text}</label>
			</div>

			<button className={styles.deleteButton} onClick={() => deleteTasks(id)}>
				<TrashSvg />
			</button>
		</div>
	)
}
