// import { useState } from 'react'
// import Lightbox from 'yet-another-react-lightbox'
// import {
// 	Counter,
// 	Download,
// 	Fullscreen,
// 	Thumbnails,
// 	Zoom
// } from 'yet-another-react-lightbox/plugins'
// import PhotoItems from './photo_Items/PhotoItems'
// import 'yet-another-react-lightbox/plugins/thumbnails.css'
// import 'yet-another-react-lightbox/plugins/counter.css'
// import 'yet-another-react-lightbox/styles.css'
// import styles from './GalleryPhotos.module.scss'

// const GalleryPhotos = ({ responseData, parentRef }) => {
// 	const [currentImg, setCurrentImg] = useState(-1)
// 	const photos = responseData?.photos || []
// 	const photoItems = photos.map((image, index) => ({
// 		src: image,
// 		alt: `photo-${index}`
// 	}))

// 	return (
// 		<div className={styles.photosContainer}>
// 			<PhotoItems photos={photos} setCurrentImg={setCurrentImg} />
// 			<Lightbox
// 				plugins={[Download, Fullscreen, Thumbnails, Counter, Zoom]}
// 				counter={{
// 					container: { style: { top: 'unset', bottom: 0 } }
// 				}}
// 				styles={{
// 					container: { backgroundColor: 'rgba(0, 0, 0, .95)' }
// 				}}
// 				open={currentImg >= 0}
// 				index={currentImg}
// 				close={() => setCurrentImg(-1)}
// 				slides={photoItems}
// 			/>
// 		</div>
// 	)
// }

// export default GalleryPhotos

import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
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
	const [photos, setPhotos] = useState(responseData?.photos.slice(0, 3) || []) // Изначально загружаем только первые 3 фото
	const [hasMore, setHasMore] = useState(true) // Флаг для определения, есть ли еще фотографии для загрузки

	const fetchMoreData = () => {
		// Здесь мы загружаем следующую порцию фотографий
		// В данном примере загружаем еще 3 фото
		const nextPhotos = responseData?.photos.slice(
			photos.length,
			photos.length + 3
		)

		if (nextPhotos.length > 0) {
			setPhotos(prevPhotos => [...prevPhotos, ...nextPhotos])
		} else {
			setHasMore(false) // Если нет больше фотографий для загрузки, устанавливаем hasMore в false
		}
	}

	const photoItems = photos.map((image, index) => ({
		src: image,
		alt: `photo-${index}`
	}))

	return (
		<div className={styles.photosWrapper}>
			<InfiniteScroll
				dataLength={photos.length}
				next={fetchMoreData}
				hasMore={hasMore}
				// loader={<h4>Loading...</h4>}
				className={styles.photosContainer}
			>
				<PhotoItems photos={photos} setCurrentImg={setCurrentImg} />

			</InfiniteScroll>

			<Lightbox
				plugins={[Download, Fullscreen, Thumbnails, Counter, Zoom]}
				counter={{
					container: { style: { top: 'unset', bottom: 0 } }
				}}
				styles={{
					container: { backgroundColor: 'rgba(0, 0, 0, .95)' }
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
