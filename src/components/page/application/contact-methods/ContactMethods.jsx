import Field from '../../../../ui/feild/Field'
import styles from '../Application.module.scss'

const ContactMethods = ({ register, errors, control }) => {
	return (
		<div className={styles.subject}>
			<Field
				control={control}
				error={errors?.phone?.message}
				name='phone'
				register={register}
				options={{
					required: 'Требуется указать телефон',
					pattern: {
						value: /^\d{1} \d{3} \d{3} \d{2} \d{2}$/,
						message: 'Некорректный номер телефона'
					}
				}}
				type='text'
				placeholder='Ваш телефон'
				mask='9 999 999 99 99'
			/>

			<Field
				error={errors?.email?.message}
				name='email'
				register={register}
				options={{
					required: 'Требуется указать Email',
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Простая проверка формата email
						message: 'Некорректный email'
					}
				}}
				type={'text'}
				placeholder='Ваш email'
			/>
			<Field
				error={errors?.telegram?.message}
				name='telegram'
				register={register}
				type={'text'}
				placeholder='Ваш Telegram'
			/>
		</div>
	)
}

export default ContactMethods
