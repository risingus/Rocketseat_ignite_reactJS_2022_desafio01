import styles from './index.module.css'
import clipBoardIcon from '../../assets/clipboard.svg'
import { Task } from '../Task'

interface Task {
	id?: string
	text?: string
	completed?: boolean
}

interface TaskContainerProps {
	tasks: Task[]
}

const TaskContainer = ({ tasks }: TaskContainerProps) => {
	return (
		<div className={styles.tasksContainer}>
			<div className={styles.tasksContent}>
				<header>
					<div className={styles.createdTasksCounter}>
						<span>Tarefas criadas</span>

						<div className={styles.tasksCounter}>0</div>
					</div>

					<div className={styles.completedTasksCounter}>
						<span>Concluídas</span>

						<div className={styles.tasksCounter}>0</div>
					</div>
				</header>

				<div className={styles.taskListContainer}>
					{Array.isArray(tasks) &&
						tasks.length > 0 &&
						tasks.map((task) => (
							<Task
								key={task?.id}
								text={task?.text}
								id={task?.id}
								completed={task?.completed}
							/>
						))}
				</div>

				{!Array.isArray(tasks) ||
					(tasks.length === 0 && (
						<div className={styles.noTasksContainer}>
							<img src={clipBoardIcon} alt='clipboard' />
							<span>
								<strong>Você ainda não tem tarefas cadastradas</strong>
								<br />
								Crie tarefas e organize seus itens a fazer
							</span>
						</div>
					))}
			</div>
		</div>
	)
}

export { TaskContainer }
