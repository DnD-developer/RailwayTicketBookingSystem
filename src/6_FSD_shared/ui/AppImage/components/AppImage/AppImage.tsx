import type { ImgHTMLAttributes, ReactNode } from "react"
import { memo, useLayoutEffect, useState } from "react"

type AppImageProps = {
	src: string
	alt?: string
	fallback?: ReactNode
	errorFallback?: ReactNode
	testIsLoading?: boolean
	className?: string
} & ImgHTMLAttributes<HTMLImageElement>

export const AppImage = memo<AppImageProps>(props => {
	const {
		className,
		alt = "image",
		errorFallback,
		fallback,
		src,
		testIsLoading = false,
		...otherProps
	} = props

	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useLayoutEffect(() => {
		const img = new Image()
		img.src = src
		img.onload = () => {
			setIsLoading(false)
		}
		img.onerror = () => {
			setIsLoading(false)
			setIsError(true)
		}
	}, [src])

	if ((isLoading || testIsLoading) && fallback) {
		return fallback
	}

	if (isError && errorFallback) {
		return errorFallback
	}

	return (
		<img
			className={className}
			src={src}
			alt={alt}
			{...otherProps}
		/>
	)
})
