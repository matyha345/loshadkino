import { useQuery } from 'react-query'
import Links from '../../../ui/links/Links'
import Layout from '../../layout/Layout'
import styles from './Gallery.module.scss'
import { LocalGalleryPicture } from '../../../providers/local.gallery.service'

const Gallery = () => {
	const {
		isLoading,
		data: responseData,
		error
	} = useQuery('list_picture', LocalGalleryPicture.getImages)

	console.log(responseData)

	return (
		<Layout background={'#292728'}>
			<div className={styles.wrapper}>
				<Links />

				{isLoading ? (
					<div>Loading...</div>
				) : error ? (
					<div>Error: {error.message}</div>
				) : responseData ? (
					<div className={styles.wrapper} style={{display: 'flex'}}>
						{responseData.photos.map((item, index) => (
							<div key={index} >
								<img width={300} src={item} alt={`photo-${index}`} />
							</div>
						))}
					</div>
				) : (
					<div>No NewsComponent available...</div>
				)}
			</div>
		</Layout>
	)
}

export default Gallery
