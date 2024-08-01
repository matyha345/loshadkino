import { useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'
import RideInStyle from '../../../ui/rideInStyle/RideInStyle'
import Layout from '../../layout/Layout'
import style from './Home.module.scss'
import AboutUs from './about/AboutUs'
import OurStaff from './our-staff/OurStaff'
import Quotes from './quotes/Quotes'


const Home = () => {

	const nav = useNavigate()

	return (
		<Layout isNotWrapper={true}>
			<div className={style.wrapper}>

				<div className={style.home}>
					<div
						className={style.picture}
						style={{ backgroundImage: "url('home.jpg')" }}
					></div>

					<div className={style.content}>
						<h2 className={style.contentTitle}>
							Домашняя мини-ферма <span>"Лошадкино"</span>
						</h2>
						<p className={style.contentText}>
							Мы дружелюбная конная школа недалеко от
							Калининграда, мы обучаем всадников всех возрастов и
							уровней подготовки разделять нашу любовь к лошадям и
							извлекать уроки из общения с ними.
						</p>

						<div className={style.contentBtn}>
							<Button clickHandler={() => nav('/application')}>начни сегодня</Button>
						</div>
					</div>
				</div>

				<AboutUs />
			</div>

			<Quotes />

			<div className={style.wrapper}>
				<OurStaff />
			</div>
			<RideInStyle />			

		</Layout>
	)
}

export default Home
