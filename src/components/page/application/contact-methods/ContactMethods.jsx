import Field from '../../../../ui/feild/Field'
import styles from '../Application.module.scss'

const ContactMethods = ({ register, errors }) => {
	return (
		<div className={styles.subject}>
			<Field
				error={errors?.tel?.message}
				name='tel'
				register={register}
				options={{
					required: 'Требуется указать телефон'
				}}
				type={'number'}
				placeholder='Ваш телефон'
			/>
			<Field
				error={errors?.email?.message}
				name='email'
				register={register}
				options={{
					required: 'Требуется указать Email'
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
