import { AddTasks } from './components/AddTasks'
import { Header } from './components/Header'
import { TaskContainer } from './components/TasksContainer'
import { useTasks } from './hooks/useTasks'
import styles from './index.module.css'

function App() {
	const { taskState, deleteTasks, changeTasks, createTask } = useTasks()

	return (
		<div className={styles.App}>
			<Header />

			<AddTasks createTask={createTask} />
			<TaskContainer
				tasks={taskState}
				deleteTasks={deleteTasks}
				changeTasks={changeTasks}
			/>
		</div>
	)
}

export default App
