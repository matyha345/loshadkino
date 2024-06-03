import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import Links from '../../../ui/links/Links'
import Layout from '../../layout/Layout'
import styles from './Contacts.module.scss'
import Desc from './desc/Desc'

const Contacts = () => {
	return (
		<Layout background={'#292728'}>
			<div className={styles.wrapper}>

				<Links />

				<div className={styles.content}>
					<h2 className={styles.title}>Нас легко найти: ваш путь к нам</h2>

					<div className={styles.address}>
						<Desc />
					</div>

					<div className={styles.map}>
						<YMaps draggable={true}>
							<Map
								width={'100%'}
								height={'600px'}
								defaultState={{
									center: [54.709027, 20.709217],
									zoom: 16,
									controls: [
										'zoomControl',
										'fullscreenControl'
									]
								}}
								options={{
									
								}}
								modules={[
									'control.ZoomControl',
									'control.FullscreenControl'
								]}
							>
								<Placemark
									defaultGeometry={[54.709027, 20.709217]}
									options={{
										preset: 'islands#greenDotIconWithCaption',
										iconColor: '#CC3E30',
										controls: []
									}}
								/>
							</Map>
						</YMaps>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Contacts
