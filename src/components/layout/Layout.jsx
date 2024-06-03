import cn from 'clsx'
import styles from './Layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ({ children, isNotWrapper, background }) => {
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.noWrapper]: isNotWrapper
			})}
		>
			<Header background={background} isNotWrapper={isNotWrapper} />
			{children}
			<Footer isNotWrapper={isNotWrapper} />
		</div>
	)
}

export default Layout
