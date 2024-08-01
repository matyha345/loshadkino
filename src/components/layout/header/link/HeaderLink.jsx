import { Link } from 'react-router-dom'
import cn from 'clsx'
import SocialLink from '../../../../ui/social/SocialLink'
import styles from './HeaderLink.module.scss'

const HeaderLunk = ({ link, social, pathname, isShow }) => {
	return (
		<ul className={cn(styles.item, { [styles.open]: isShow })}>
			{link.map(item => (
				<li key={`_link_${item.name}`} className={styles.list}>
					{item.hrefLink.startsWith('#') ? (
						pathname === '/' && (
							<a className={styles.link} href={item.hrefLink}>
								{item.name}
							</a>
						)
					) : (
						<Link className={styles.link} to={item.hrefLink}>
							{item.name}
						</Link>
					)}
				</li>
			))}

			<div className={styles.social}>
				{social.map(item => (
					<div key={`_social_${item.id}`} className={styles.element}>
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
	)
}

export default HeaderLunk
