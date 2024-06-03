import { Link, useLocation } from 'react-router-dom'
import cn from 'clsx'
import { dataComponent } from '../data/dataComponent'
import SocialLink from '../../../ui/social/SocialLink'
import styles from './Header.module.scss'

const Header = ({ isNotWrapper, background }) => {
	const { pathname } = useLocation()

	return (
		<header
			className={cn(styles.container, {
				[styles.yesContainer]: isNotWrapper == true
			})}
		>
			<div
				style={{
					backgroundColor: `${background}`,
					clipPath: 'inset(0 -100vmax)',
					boxShadow: `0 0 0 100vmax ${background}`
				}}
				className={styles.wrapper}
			>
				<Link to={'/'} className={styles.logo}>
					<img src='/logo.svg' alt='Логотип сайта' />
				</Link>

				<ul className={styles.item}>
					{dataComponent.linksList.map(item => (
						<li key={`_link_${item.name}`} className={styles.list}>
							{item.hrefLink.startsWith('#') ? (
								pathname === '/' && (
									<a
										className={styles.link}
										href={item.hrefLink}
									>
										{item.name}
									</a>
								)
							) : (
								<Link
									className={styles.link}
									to={item.hrefLink}
								>
									{item.name}
								</Link>
							)}
						</li>
					))}

					<div className={styles.social}>
						{dataComponent.listSocial.map(item => (
							<div
								key={`_social_${item.id}`}
								className={styles.element}
							>
								<SocialLink
									link={item.link}
									children={item.imagePath}
									imgAlt={item.imgAlt}
									customStyles={{ width: '19px' }}
								/>
							</div>
						))}
					</div>
				</ul>
			</div>
		</header>
	)
}
export default Header
