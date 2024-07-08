import Breadcrumbs from '../../../../ui/breadcrumbs/Breadcrumbs'
import styles from './OurStaff.module.scss'

const dataSara = [
	{
		name: 'Моторина Мария',
		type: 'Тренер',
		img: 'images/Maria_Motorina.png'
	},
	{
		name: 'Хорава Наталья',
		type: 'Тренер',
		img: 'images/Natalia_Chora.png'
	},
	{
		name: 'Шишенина Дарья',
		type: 'Тренер',
		img: 'images/Shishenina_Daria.png'
	},
	{
		name: 'Николаева Виктория',
		type: 'Фотограф',
		img: 'images/Nikolaeva_Victoria.png'
	}
]

const OurStaff = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Наши сотрудники</h2>
			<p className={styles.text}>
				Мы гордимся нашей профессиональной и преданной команде, которая
				помогает нам достигать новых высот. Наши тренеры и волонтеры
				обладают богатым опытом и страстью к своей работе, обеспечивая
				наилучший уход и тренировки для наших лошадей и клиентов.
				Познакомьтесь с нашими ключевыми сотрудниками:
			</p>

			<Breadcrumbs children={dataSara} />
		</div>
	)
}
export default OurStaff
