import { useForm } from 'react-hook-form'
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
		watch,
		formState: { errors }
	} = useForm()

	// const onSubmit = data => alert(`executed_${JSON.stringify(data, null, 2)}`)

	const onSubmit = async data => {
		try {
			const response = await fetch('http://localhost:8000/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const result = await response.json()
			console.log(result) // Логирование результата
			alert(result.message)
		} catch (error) {
			console.error('Error:', error)
			console.log(`executed_${JSON.stringify(data, null, 2)}`)
			alert('Error')
		}
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
