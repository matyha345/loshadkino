import styles from './Alert.module.scss'

import React, { useEffect, useRef, useState } from 'react'

const Alert = ({ type = 'success', text }) => {
	const [isVisible, setIsVisible] = useState(true)
	const timeoutIdRef = useRef(null)

	useEffect(() => {
		if (isVisible) {
			timeoutIdRef.current = setTimeout(() => {
				setIsVisible(false)
			}, 3000)
		} else if (timeoutIdRef.current) {
			clearTimeout(timeoutIdRef.current)
		}

		return () => {
			if (timeoutIdRef.current) {
				clearTimeout(timeoutIdRef.current)
			}
		}
	}, [isVisible])

	return <div className={styles.alert}>{text}</div>
}

export default Alert
