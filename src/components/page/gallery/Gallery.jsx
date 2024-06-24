import React, { useRef, useCallback } from 'react'
import { useQuery } from 'react-query'
import { LocalGalleryPicture } from '../../../providers/local.gallery.service'
import { useNavigate } from 'react-router-dom'

import Layout from '../../layout/Layout'
import styles from './Gallery.module.scss'
import GalleryPhotos from './gallery_photos/GalleryPhotos'
import Button from '../../../ui/button/Button'

const Gallery = () => {
	const {
		isLoading,
		data: responseData,
		error
	} = useQuery('list_picture', LocalGalleryPicture.getImages)

	const nav = useNavigate()

	const goBack = () => {
		nav(-1)
	}

	return (
		<Layout background={'#292728'}>
			<div className={styles.wrapper}>
				<div className={styles.backBtn}>
					<Button clickHandler={goBack}>Вернутся обратно</Button>
				</div>

				{isLoading ? (
					<div>Loading...</div>
				) : error ? (
					<div>Error: {error.message}</div>
				) : responseData ? (
					<div className={styles.wrapper}>
						<GalleryPhotos responseData={responseData} />
					</div>
				) : (
					<div>No NewsComponent available...</div>
				)}
			</div>
		</Layout>
	)
}

export default Gallery
