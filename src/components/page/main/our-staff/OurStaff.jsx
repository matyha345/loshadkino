import Breadcrumbs from '../../../../ui/breadcrumbs/Breadcrumbs'
import styles from './OurStaff.module.scss'

const dataSara = [
	{
		name: 'Анна Петрова',
		type: 'Тренер',
		img: '/maha.png'
	},
	{
		name: 'Екатерина Михайлова',
		type: 'Тренер',
		img: '/maha.png'
	},
	{
		name: 'Мария Кузнецова',
		type: 'Волонтер',
		img: '/maha.png'
	},
	{
		name: 'Ольга Соколова',
		type: 'Тренер',
		img: '/maha.png'
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
