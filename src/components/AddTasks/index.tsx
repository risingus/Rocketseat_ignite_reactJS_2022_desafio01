import { useEffect, useRef, useState, FormEvent, ChangeEvent } from 'react'
import { AddButton } from '../AddButton'
import { Input } from '../Input'
import styles from './index.module.css'

interface AddTasksProps {
	createTask: (text: string) => void
}

const AddTasks = ({ createTask }: AddTasksProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [newTask, setNewTask] = useState('' as string)

	function createNewTaks(event: FormEvent<HTMLFormElement>) {
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
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						setNewTask(event?.target?.value)
					}
					placeholder='Adicione uma nova tarefa'
					required
				/>
				<AddButton type='submit' />
			</form>
		</div>
	)
}

export { AddTasks }
