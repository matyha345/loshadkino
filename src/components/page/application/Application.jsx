import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { LocalSendMessageEmail } from '../../../providers/local.sendMessage.srvice'

import Links from '../../../ui/links/Links'
import Layout from '../../layout/Layout'
import Caption from './caption/Caption'
import ContactMethods from './contact-methods/ContactMethods'
import CommunicationDetails from './communication-details/CommunicationDetails'

import styles from './Application.module.scss'
import Alert from '../../../ui/alert/Alert'
import { useState } from 'react'

const Application = () => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		control,
		formState: { errors }
	} = useForm()

	const [alert, setAlert] = useState({
		isVisible: false,
		text: '',
		type: 'success'
	})

	const mutation = useMutation(LocalSendMessageEmail.submitData, {
		onSuccess: () => {
			setAlert({
				isVisible: true,
				text: 'Данные успешно отправлены',
				type: 'success'
			})
			resetFormFields()
		},
		onError: error => {
			console.error('Error:', error)
			setAlert({
				isVisible: true,
				text: 'Ошибка при отправке данных',
				type: 'error'
			})
		}
	})

	const onSubmit = async data => {
		mutation.mutate(data)
	}

	const resetFormFields = () => {
		reset()
		setValue('phone', '')
		setValue('email', '')
		setValue('telegram', '')
	}

	return (
		<Layout background={'#292728'}>
			<div className={styles.wrapper}>
				<Links />
				<div className={styles.body}>
					<h3 className={styles.title}>Свяжитесь с нами</h3>

					<p className={styles.text}>
						Мы всегда рады помочь вам! Пожалуйста, заполните форму
						ниже, и мы свяжемся с вами в ближайшее время.
					</p>
					<form
						className={styles.form}
						onSubmit={handleSubmit(onSubmit)}
					>
						<Caption register={register} errors={errors} />
						<ContactMethods
							register={register}
							errors={errors}
							control={control}
						/>
						<CommunicationDetails
							register={register}
							errors={errors}
						/>
						<div className={styles.boxBtn}>
							<div className={styles.btn}>
								<input
									type='button'
									onClick={() => resetFormFields()}
									value='сбросить'
									className={styles.button}
								/>
							</div>
							<div className={styles.btn}>
								<input
									className={styles.button}
									type='submit'
								/>
							</div>
						</div>
					</form>
					{alert.isVisible && (
						<Alert type={alert.type} text={alert.text} />
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Application
