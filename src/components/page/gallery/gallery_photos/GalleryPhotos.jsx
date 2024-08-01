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
	const [photos, setPhotos] = useState(responseData?.photos.slice(0, 3) || [])
	const [hasMore, setHasMore] = useState(true)

	const fetchMoreData = () => {
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

	// Формируем список всех фото для Lightbox
	const allPhotoItems = responseData?.photos.map((image, index) => ({
		src: image,
		alt: `photo-${index}`
	}))

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
				slides={allPhotoItems}
			/>
		</div>
	)
}

export default GalleryPhotos
