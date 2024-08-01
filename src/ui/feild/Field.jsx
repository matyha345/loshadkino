import React from 'react'
import InputMask from 'react-input-mask'
import styles from './Field.module.scss'
import { Controller } from 'react-hook-form'

const Field = ({ register, name, options, error, mask, control, ...rest }) => {


	const handleBeforeMaskedValueChange = newState => {
		let { value } = newState

		if (value.startsWith('8')) {
			value = '7' + value.slice(1)
		}

		return {
			...newState,
			value
		}
	}

	return (
		<div className={styles.wrapper}>
			{mask ? (
				<Controller
					name={name}
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<InputMask
							{...field}
							mask={mask}
							beforeMaskedValueChange={
								handleBeforeMaskedValueChange
							}
							{...rest}
							className={styles.input}
						/>
					)}
				/>
			) : (
				<input
					{...register(name, options)}
					{...rest}
					className={styles.input}
				/>
			)}
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Field
