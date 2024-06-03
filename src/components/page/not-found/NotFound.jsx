import { useNavigate } from "react-router-dom"
import styles from './NotFound.module.scss'
import Button from "../../../ui/button/Button"


const NotFound = () => {
	const nav = useNavigate()
	return (
		<section
			className={styles.notFound}
			style={{ backgroundImage: 'url("/Home.JPG")' }}
		>
			<div className={styles.wrapperInner}>
				<h1 className={styles.title}>Страница не найдена</h1>
				<Button clickHandler={() => nav('/')}>Вернутся на главную</Button>
			</div>
		</section>
	)
}
export default NotFound
