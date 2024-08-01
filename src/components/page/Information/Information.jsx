import { useState } from 'react'
import Certificates from './box/Certificates'
import FirstVisit from './box/FirstVisit'
import Photography from './box/Photography'
import Safety from './box/Safety'
import Treats from './box/Treats'
import Button from '../../../ui/button/Button'
import Links from '../../../ui/links/Links'
import Layout from '../../layout/Layout'
import styles from './Information.module.scss'
import Price from './box/Price'

const tabs = [
	{ id: 'price', label: 'Прайс' },
	{ id: 'safety', label: 'Техника безопасности' },
	{ id: 'photography', label: 'Фотосъёмка' },
	{ id: 'certificates', label: 'Сертификаты' },
	{ id: 'treats', label: 'Угощения для лошади' },
	{
		id: 'firstVisit',
		label: 'Первый визит на конюшню: что надеть и правила'
	}
]

const Information = () => {
	const [activeTab, setActiveTab] = useState('price')

	const renderActiveTab = () => {
		switch (activeTab) {
			case 'price':
				return <Price />
			case 'firstVisit':
				return <FirstVisit />
			case 'certificates':
				return <Certificates />
			case 'photography':
				return <Photography />
			case 'safety':
				return <Safety />
			case 'treats':
				return <Treats />
			default:
				return null
		}
	}

	return (
		<Layout background={'#292728'}>
			<div className={styles.wrapper}>
				<Links />

				<div className={styles.desc}>
					<div className={styles.control}>
						{tabs.map(tab => (
							<Button
								key={`_infoTabs'_${tab.id}`}
								isBgButton={true}
								isActive={activeTab === tab.id}
								clickHandler={() => setActiveTab(tab.id)}
							>
								{tab.label}
							</Button>
						))}
					</div>

					{renderActiveTab()}
				</div>
			</div>
		</Layout>
	)
}

export default Information
