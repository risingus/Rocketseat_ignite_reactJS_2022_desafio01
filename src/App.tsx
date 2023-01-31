import { AddTasks } from './components/AddTasks'
import { Header } from './components/Header'
import { TaskContainer } from './components/TasksContainer'

function App() {
	return (
		<div className='App'>
			<Header />
			<AddTasks />
			<TaskContainer tasks={[]} />
		</div>
	)
}

export default App
