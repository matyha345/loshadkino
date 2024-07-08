import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { LocalSendMessageEmail } from '../../../providers/local.sendMessage.srvice'

import Links from '../../../ui/links/Links'
import Layout from '../../layout/Layout'
import Caption from './caption/Caption'
import ContactMethods from './contact-methods/ContactMethods'
import CommunicationDetails from './communication-details/CommunicationDetails'

import styles from './Application.module.scss'

const Application = () => {
	
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const mutation = useMutation(LocalSendMessageEmail.submitData, {
		onSuccess: data => {
			alert(data.message)
		},
		onError: error => {
			console.error('Error:', error)
			alert('Error')
		}
	})

	const onSubmit = async data => {
		mutation.mutate(data)
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

						<ContactMethods register={register} errors={errors} />

						<CommunicationDetails
							register={register}
							errors={errors}
						/>
						<div className={styles.btn}>
							<input className={styles.button} type='submit' />
						</div>
					</form>
				</div>
			</div>
		</Layout>
	)
}

export default Application
