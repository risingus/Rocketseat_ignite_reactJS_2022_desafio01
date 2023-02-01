import { AddTasks } from './components/AddTasks'
import { Header } from './components/Header'
import { TaskContainer } from './components/TasksContainer'
import { useTasks } from './hooks/useTasks'

function App() {
	const { taskState, deleteTasks, changeTaks, createTask } = useTasks()

	return (
		<div className='App'>
			<Header />

			<AddTasks createTask={createTask} />
			<TaskContainer tasks={taskState} />
		</div>
	)
}

export default App
