import Field from '../../../../ui/feild/Field'
import styles from '../Application.module.scss'

const Caption = ({ register, errors }) => {
	return (
		<div className={styles.caption}>
			<Field
				error={errors?.firstName?.message}
				name='firstName'
				register={register}
				options={{
					required: 'Требуется указать имя'
				}}
				type={'text'}
				placeholder='Ваше имя'
			/>
			<Field
				error={errors?.lastName?.message}
				name='lastName'
				register={register}
				options={{
					required: 'Требуется указать фамилию'
				}}
				type={'text'}
				placeholder='Ваша фамилия'
			/>
		</div>
	)
}

export default Caption
