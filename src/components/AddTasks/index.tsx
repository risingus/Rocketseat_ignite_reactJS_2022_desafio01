import { useEffect, useRef, useState } from 'react'
import { AddButton } from '../AddButton'
import { Input } from '../Input'
import styles from './index.module.css'

interface AddTasksProps {
	createTask: (event: any) => void
}

const AddTasks = ({ createTask }: AddTasksProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [newTask, setNewTask] = useState('' as string)

	function createNewTaks(event: any) {
		if (event) event.preventDefault()
		if (!inputRef.current) return

		createTask(newTask)

		setNewTask('')
	}

	useEffect(() => {
		if (!inputRef?.current) return

		inputRef.current.focus()
	}, [])

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={createNewTaks}>
				<Input
					name='newTask'
					ref={inputRef}
					value={newTask}
					onChange={(event: any) => setNewTask(event?.target?.value)}
					placeholder='Adicione uma nova Tarefa'
					required
				/>
				<AddButton type='submit' />
			</form>
		</div>
	)
}

export { AddTasks }
