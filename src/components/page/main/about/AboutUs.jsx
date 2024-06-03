import styles from './AboutUs.module.scss'

const aboutUsCard = [
	{
		images: '/aboutUs-one.png',
		title: 'Фотосессия',
		text: 'Волшебная фотосессия на лошадях: познакомьтесь с нашими дружелюбными лошадьми и насладитесь красотой природы',
		alt: 'Девушка с лошадью в лесу'
	},
	{
		images: '/aboutUs-two.png',
		title: 'Уроки Верховой Езды',
		text: 'Уроки верховой езды: усовершенствуйте свои навыки и достигайте новых высот!',
		alt: 'Наездник на лошади преодолевает препятствие'
	},
	{
		images: '/aboutUs-three.png',
		title: 'Верховая Езда на Свежем Воздухе',
		text: 'Индивидуальные уроки на свежем воздухе: насладитесь природой и верховой ездой!',
		alt: 'Девушка с лошадью на поле'
	}
]

const AboutUs = () => {
	return (
		<div id='aboutUs' className={styles.wrapper}>
			<h2 id='#aboutUs' className={styles.title}>
				О нас
			</h2>

			<p className={styles.text}>
				Добро пожаловать на домашнюю мини-ферму "Лошадкино"! Наша ферма
				– это идеальное место для любителей природы и животных. Мы
				предлагаем разнообразные программы для обучения верховой езде,
				которые подойдут как начинающим, так и опытным наездникам.
			</p>

			<div className={styles.cards}>
				{aboutUsCard.map(item => (
					<div key={`_aboutUs_${item.title}`} className={styles.card}>
						<img src={item.images} alt={item.alt} />
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default AboutUs
