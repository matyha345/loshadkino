import styles from './SocialLink.module.scss'

const SocialLink = ({ link, children, imgAlt, customStyles }) => {
	return (
		<>
			<a className={styles.wrapper} href={link} target='_blank'>
				<img style={customStyles} src={children} alt={imgAlt} />
			</a>
		</>
	)
}

export default SocialLink
