import styles from './index.module.css'

interface Task {
	id: string
	text: string
	completed: boolean
}

interface TaskContainerProps {
	tasks: Task[]
}

const TaskContainer = ({ tasks }: TaskContainerProps) => {
	return (
		<div className={styles.taksContainer}>
			<div>
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

				<div>
					<strong>Você ainda não tem tarefas cadastradas</strong>
					<span>Crie tarefas e organize seus itens a fazer</span>
				</div>
			</div>
		</div>
	)
}

export { TaskContainer }
