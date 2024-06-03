import Textarea from '../../../../ui/textarea/Textarea'
import styles from '../Application.module.scss'

const CommunicationDetails = ({ register, errors }) => {
	return (
		<div className={styles.meta}>
			<Textarea
				error={errors?.AddInformation?.message}
				name='addInformation'
				register={register}
				type={'text'}
				placeholder='Дополнительные сведения'
			/>
		</div>
	)
}

export default CommunicationDetails
