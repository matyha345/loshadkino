import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import {
	Counter,
	Download,
	Fullscreen,
	Thumbnails,
	Zoom
} from 'yet-another-react-lightbox/plugins'
import PhotoItems from './photo_Items/PhotoItems'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/counter.css'
import 'yet-another-react-lightbox/styles.css'
import styles from './GalleryPhotos.module.scss'

const GalleryPhotos = ({ responseData }) => {
	const [currentImg, setCurrentImg] = useState(-1)
	const photos = responseData?.photos || []
	const photoItems = photos.map((image, index) => ({
		src: image,
		alt: `photo-${index}`
	}))

	return (
		<div className={styles.photosContainer}>
			<PhotoItems photos={photos} setCurrentImg={setCurrentImg} />
			<Lightbox
				plugins={[Download, Fullscreen, Thumbnails, Counter, Zoom]}
				counter={{
					container: { style: { top: 'unset', bottom: 0 } }
				}}
				styles={{
					container: { backgroundColor: 'rgba(0, 0, 0, .8)' }
				}}
				open={currentImg >= 0}
				index={currentImg}
				close={() => setCurrentImg(-1)}
				slides={photoItems}
			/>
		</div>
	)
}

export default GalleryPhotos
