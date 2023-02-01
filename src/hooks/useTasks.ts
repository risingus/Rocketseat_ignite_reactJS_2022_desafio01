import { useMemo, useReducer } from 'react'

interface Task {
	id?: string
	text?: string
	completed?: boolean
}

interface ReducerAction extends Task {
	type: string
}

const initialState = [] as any

function tasksReducer(state: any, action: ReducerAction) {
	switch (action.type) {
		case 'add': {
			console.log(state, 'aqui o state')
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
			console.log(...state, 'state')
			console.log(action, 'action')
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

	function createTask(newTask: any) {
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

	function changeTaks(id: string) {
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
		changeTaks,
		createTask,
	}
}

export { useTasks }
