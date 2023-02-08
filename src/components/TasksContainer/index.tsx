import styles from './index.module.css'
import clipBoardIcon from '../../assets/images/clipboard.svg'
import { Task } from '../Task'
import { useMemo } from 'react'

interface TaskContainerProps {
	tasks: Task[]
	deleteTasks: (id: string) => void
	changeTasks: (id: string) => void
}

const TaskContainer = ({
	tasks,
	deleteTasks,
	changeTasks,
}: TaskContainerProps) => {
	const completedTasks = useMemo(() => {
		if (!Array.isArray(tasks)) return 0

		return tasks.filter((task) => task?.completed).length
	}, [tasks])

	return (
		<div className={styles.tasksContainer}>
			<header>
				<div className={styles.createdTasksCounter}>
					<span>Tarefas criadas</span>

					<div className={styles.tasksCounter}>
						{!Array.isArray(tasks) ? 0 : tasks.length}
					</div>
				</div>

				<div className={styles.completedTasksCounter}>
					<span>Concluídas</span>

					<div className={styles.tasksCounter}>
						{completedTasks} de {!Array.isArray(tasks) ? 0 : tasks.length}
					</div>
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
							deleteTasks={deleteTasks}
							changeTasks={changeTasks}
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
	)
}

export { TaskContainer }
