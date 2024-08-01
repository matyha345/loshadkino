import { Link, useLocation } from 'react-router-dom'
import cn from 'clsx'
import { dataComponent } from '../data/dataComponent'
import styles from './Header.module.scss'
import HeaderLunk from './link/HeaderLink'
import { useEffect, useState } from 'react'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

const Header = ({ isNotWrapper, background }) => {
	const { pathname } = useLocation()

	const { ref, isShow, setIsShow } = useOnClickOutside(false)

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const toggleMenu = () => {
		setIsShow(!isShow)
	}

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const dynamicStyles =
		windowWidth >= 1080
			? {
					backgroundColor: background,
					clipPath: 'inset(0 -100vmax)',
					boxShadow: `0 0 0 100vmax ${background}`
				}
			: {}

	return (
		<header
			className={cn(styles.container, {
				[styles.yesContainer]: isNotWrapper == true
			})}
		>
			<div style={dynamicStyles} className={styles.wrapper} ref={ref}>
				<Link to={'/'} className={styles.logo}>
					<img src='svg/logo.svg' alt='Логотип сайта' />
				</Link>

				<button className={styles.burger} onClick={toggleMenu}>
					{!isShow ? (
						<img src='svg/burgerMenuClose.svg' alt='Закрыто' />
					) : (
						<img src='svg/burgerMenuOpen.svg' alt='Открыто' />
					)}
				</button>

				<HeaderLunk
					link={dataComponent.linksList}
					social={dataComponent.listSocial}
					pathname={pathname}
					isShow={isShow}
				/>
			</div>
		</header>
	)
}
export default Header
