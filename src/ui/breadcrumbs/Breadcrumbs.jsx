import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ children }) => {
	return (
		<>
			<div className={styles.body}>
				{children.map(item => (
					<div
						key={`_dataSara_${item.name}`}
						class={styles.staffMember}
					>
						<img src={item.img} alt='Sarah Weber' />
						<h3 className={styles.name}>{item.name}</h3>
						<span>{item.type}</span>
					</div>
				))}
			</div>
		</>
	)
}

export default Breadcrumbs
