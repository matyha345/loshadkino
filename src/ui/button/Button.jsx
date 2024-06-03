import cn from 'clsx'
import styles from './Button.module.scss'

const Button = ({
	clickHandler = () => {},
	children,
	isBgButton = false,
	isActive = false
}) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.buttonBg]: isBgButton,
				[styles.active]: isActive
			})}
			onClick={clickHandler}
		>
			{children}
		</button>
	)
}

export default Button
