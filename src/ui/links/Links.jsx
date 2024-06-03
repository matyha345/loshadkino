import { Link, useLocation } from 'react-router-dom'
import styles from './Links.module.scss'
import cn from 'clsx'

const linksData = [
	{
		name: 'Полезная Информация',
		path: '/information'
	},
	{
		name: 'Оставить заявку',
		path: '/application'
	},
	{
		name: 'Галерея',
		path: '/gallery'
	},
	{
		name: 'Адрес',
		path: '/address'
	}
]

const Links = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles.wrapper}>
			{linksData.map(item => (
				<Link
					className={cn(styles.benefits, {
						[styles.active]: pathname == item.path
					})}
					key={`_cont_${item.path}`}
					to={item.path}
				>
					{item.name}
				</Link>
			))}
		</div>
	)
}

export default Links
