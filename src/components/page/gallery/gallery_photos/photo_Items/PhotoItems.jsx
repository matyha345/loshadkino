import styles from '../GalleryPhotos.module.scss'

const PhotoItems = ({ photos, setCurrentImg }) => {
	return (
		<>
			{photos.map((photo, index) => (
				<div
					className={styles.image}
					key={`__linkss_   ${index}`}
					onClick={() => setCurrentImg(index)}
				>
					<img
						src={photo}
						alt={`photo-${index}`}
						className={styles.thumbnail}
					/>
				</div>
			))}
		</>
	)
}

export default PhotoItems