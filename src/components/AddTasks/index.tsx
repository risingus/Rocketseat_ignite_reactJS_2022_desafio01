import { useEffect, useRef } from 'react'
import { AddButton } from '../AddButton'
import { Input } from '../Input'
import styles from './index.module.css'

const AddTasks = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (!inputRef?.current) return

		inputRef.current.focus()
	}, [])

	return (
		<div className={styles.container}>
			<form className={styles.form}>
				<Input ref={inputRef} placeholder='Adicione uma nova Tarefa' required />
				<AddButton />
			</form>
		</div>
	)
}

export { AddTasks }
