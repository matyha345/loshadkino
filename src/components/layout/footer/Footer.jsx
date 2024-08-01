import cn from 'clsx'
import styles from './Footer.module.scss'
import SocialLink from '../../../ui/social/SocialLink'
import { dataComponent } from '../data/dataComponent'
import { dataInstagram } from '../../../ui/social/instagram/data/instagram'
import { Link, useLocation } from 'react-router-dom'

const Footer = ({ isNotWrapper }) => {
	const { pathname } = useLocation()

	return (
		<footer
			className={cn(styles.container, {
				[styles.yesContainer]: isNotWrapper == true
			})}
		>
			<div className={styles.wrapper}>
				<div className={styles.left}>
					<div className={styles.info}>
						<img src='svg/logo-footer.svg' alt='' />
						<p className={styles.text}>
							Ферма, где вы будете чувствовать себя как дома. За
							пределами ваших мечтаний. В пределах досягаемости.
						</p>

						<div className={styles.social}>
							{dataComponent.listSocial.map(item => (
								<div
									key={`_footer_${item.id}`}
									className={styles.element}
								>
									<SocialLink
										link={item.link}
										children={item.imagePath}
										imgAlt={item.imgAlt}
										customStyles={{ width: '20px' }}
									/>
								</div>
							))}
						</div>
					</div>

					<ul className={styles.useful}>
						<h3 className={styles.usefulTitle}>Полезные ссылки</h3>

						{dataComponent.linksList.map(item => (
							<li
								key={`_link_${item.name}`}
								className={styles.list}
							>
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
					</ul>
				</div>

				<div className={styles.right}>
					<div className={styles.instagram}>
						<h3 className={styles.instagramTitle}>Instagram</h3>
						<div className={styles.instBlock}>
							{dataInstagram.map(img => (
								<a
									key={`_inst_${img}`}
									className={styles.instagramLink}
									href='https://www.instagram.com/mini_ferma_loshadkino'
									target='_blank'
								>
									<img
										src={img}
										alt='Изображение с instagram'
									/>
								</a>
							))}
						</div>
					</div>

					<div className={styles.group}>
						<h3 className={styles.groupTitle}>
							Официальная группа
						</h3>

						<a
							className={styles.groupItem}
							href='https://vk.com/mini_ferma_loshadkino'
							target='_blank'
						>
							<p>Домашняя мини-ферма "Лошадкино"</p>
							<img src='svg/Vk.svg' alt='Vk' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
