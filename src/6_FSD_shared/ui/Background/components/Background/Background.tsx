import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useMemo } from "react"
import { AppImage } from "../../../AppImage"
import styles from "./Background.module.scss"

type BackgroundProps = {
	className?: string
	background: string
	testIsLoading?: boolean
}
export const Background = TypedMemo((props: BackgroundProps) => {
	const { className, background, testIsLoading } = props

	const fallback = useMemo(
		() => (
			<div
				className={classNamesHelp(styles.background, {}, [styles.fallback, className])}
			></div>
		),
		[className]
	)

	return (
		<AppImage
			src={background}
			fallback={fallback}
			errorFallback={fallback}
			testIsLoading={testIsLoading}
			className={classNamesHelp(styles.background, {}, [className])}
		/>
	)
})
