import { useMemo, useReducer } from 'react'

interface ReducerAction {
	type: string
	id?: string
	text?: string
	completed?: boolean
}


const initialState = [] as Task[]

function tasksReducer(state: Array<any>, action: ReducerAction) {
	switch (action.type) {
		case 'add': {
			return [
				...state,
				{
					completed: false,
					id: String(new Date().getTime()),
					text: action.text,
				},
			]
		}
		case 'change': {
			return state.map((task: Task) => {
				if (task.id !== action.id) return task
				return {
					...task,
					completed: !task.completed,
				}
			})
		}
		case 'delete': {
			return state.filter((task: Task) => task.id !== action?.id)
		}
		default: {
			throw Error('Algo de errado não está certo...')
		}
	}
}

const useTasks = () => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialState)

	function createTask(newTask: string) {
		try {
			if (!newTask) return
			if (newTask.trim().length === 0) return

			dispatch({
				type: 'add',
				text: newTask,
			})
		} catch (error) {
			console.dir(error)
			throw error
		}
	}

	function changeTasks(id: string) {
		try {
			if (!id) return

			dispatch({
				type: 'change',
				id,
			})
		} catch (error) {
			console.dir(error)
			throw error
		}
	}

	function deleteTasks(id: string) {
		try {
			if (!id) return

			dispatch({
				type: 'delete',
				id,
			})
		} catch (error) {
			console.dir(error)
			throw error
		}
	}

	const taskState = useMemo(() => {
		return tasks
	}, [tasks])

	return {
		taskState,
		deleteTasks,
		changeTasks,
		createTask,
	}
}

export { useTasks }
