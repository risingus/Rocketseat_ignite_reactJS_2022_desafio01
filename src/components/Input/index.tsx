import { forwardRef } from 'react'
import styles from './index.module.css'

interface InputProps {
	placeholder: string
	required?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...rest }, ref) => (
	<input {...rest} className={styles.input} ref={ref} />
))

export { Input }
