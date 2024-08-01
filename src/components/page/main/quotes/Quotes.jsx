import style from './Quotes.module.scss'

const Quotes = () => {
	return (
		<div className={style.quotes}>
			<img className={style.quotesImage} src='/quotes.png' alt='' />

			<div className={style.quotesBlock}>
				<img src='svg/quotes.svg' alt='' />
				<p>
					&#8220;Для любви к лошадям. Ферма, где вы почувствуете себя
					как дома.&#8220;
				</p>
				<p>Домашняя мини-ферма "Лошадкино"</p>
			</div>
		</div>
	)
}
export default Quotes
