import style from './RideInStyle.module.scss'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

const RideInStyle = () => {

	const nav = useNavigate()

	return (
		<>
			<div className={style.wrapper}>
				<h2 className={style.title}>Езда со стилем!</h2>
				<p className={style.text}>Даря вам крылья, которые вам нужны</p>

				<div className={style.btn}>
					<Button clickHandler={() => nav('/application')} theBgButton={true}>начни сегодня</Button>
				</div>
			</div>
		</>
	)
}

export default RideInStyle
