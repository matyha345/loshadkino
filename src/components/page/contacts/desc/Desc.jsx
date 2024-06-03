import styles from './Desc.module.scss'

const Desc = () => {
	return (
		<div className={styles.desc}>
			<div className={styles.descHolder}>
				<h4 className={styles.descTitle}>Наш адрес:</h4>
				<p className={styles.descText}>Калининградская область</p>
				<a
					className={styles.descText}
					href='https://yandex.ru/maps/-/CDfqu--a'
					target='_blank'
				>
					Поселок Солнечное, улица Мира, Гурьевский район
				</a>
				<p className={styles.descText}>Номер дома отсутствует.</p>
			</div>
			<div className={styles.descHolder}>
				<h4 className={styles.descTitle}>Как добраться:</h4>
				<p className={styles.descText}>
					Въезжая в Солнечное, следуйте прямо по главной улице, не
					сворачивая. Проезжайте жилые дома, пока справа не увидите
					красную конюшню. Напротив конюшни находится нефтекачка. Вы
					не сможете ошибиться. Если возникнут вопросы, звоните!{' '}
					<br />
					<a className={styles.descTextTel} href='tel:+79212641716'>
						+7 (921) 264-17-16
					</a>
				</p>
			</div>
		</div>
	)
}

export default Desc
