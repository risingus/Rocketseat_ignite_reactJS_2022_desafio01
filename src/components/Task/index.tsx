import { ReactComponent as TrashSvg } from '../../assets/images/trash.svg'
import { ReactComponent as CheckedIcon } from '../../assets/images/check.svg'
import styles from './index.module.css'

interface TaskProps extends Task {
	changeTasks: (id: string) => void
	deleteTasks: (id: string) => void
}

export const Task = ({
	id = '',
	text = '',
	completed = false,
	changeTasks,
	deleteTasks,
}: TaskProps) => {
	return (
		<div className={styles.task}>
			<div>
				<input
					type='checkbox'
					id='task'
					name='task'
					onChange={() => changeTasks(id)}
					checked={completed}
				/>
				<CheckedIcon className={styles.checkboxIcon} />
				<label htmlFor='task'>{text}</label>
			</div>

			<button onClick={() => deleteTasks(id)}>
				<TrashSvg />
			</button>
		</div>
	)
}
