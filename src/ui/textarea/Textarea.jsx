import styles from './Textarea.module.scss'

const Textarea = ({ register, name, options, error, ...rest }) => {
	return (
		<div className={styles.wrapper}>
			<textarea
				{...register(name, options)}
				{...rest}
				className={styles.input}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Textarea
