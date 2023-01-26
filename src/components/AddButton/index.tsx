import { ButtonHTMLAttributes } from 'react'
import styles from './index.module.css'

const AddButton = ({ ...rest }) => {
	return <button {...rest}>Criar </button>
}
