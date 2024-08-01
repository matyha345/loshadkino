import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './Alert.module.scss'

const Alert = ({ type, text }) => {
	
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

	return (
		<div
			className={clsx(
				styles.alert,
				styles[type],
				styles['animate-fade'],
				{
					[styles.visible]: isVisible,
					[styles.hidden]: !isVisible
				}
			)}
		>
			{text}
		</div>
	)
}

export default Alert
