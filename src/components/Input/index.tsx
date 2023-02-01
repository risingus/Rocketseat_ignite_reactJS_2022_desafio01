import { forwardRef } from 'react'
import styles from './index.module.css'

interface InputProps {
	placeholder: string
	required?: boolean
	name?: string
	onChange: any
	value: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ name, onChange, value, ...rest }, ref) => (
		<input
			{...rest}
			name={name}
			className={styles.input}
			onChange={onChange}
			ref={ref}
			value={value}
		/>
	)
)

export { Input }
