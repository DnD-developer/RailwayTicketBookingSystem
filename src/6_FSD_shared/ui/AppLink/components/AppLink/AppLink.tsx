import type { appColorType, fontSizeType, fontWeightType } from "@customTypes/style.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { colorMapper } from "@helpers/colorMapper/colorMapper.helper"
import { fontSizeMapper, fontWeightMapper } from "@helpers/fontMapper/fontMapper.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback, useState } from "react"
import { Link, type LinkProps } from "react-router-dom"
import styles from "./AppLink.module.scss"

export type AppLinkProps = {
	fontSize?: fontSizeType
	fontWeight?: fontWeightType
	color?: appColorType
	colorHover?: appColorType
} & LinkProps

export const AppLink = TypedMemo((props: AppLinkProps) => {
	const {
		className,
		to,
		children,
		target,
		fontSize = "m",
		fontWeight = "medium",
		color = "main-gray",
		colorHover,
		...otherProps
	} = props

	const [hover, setHover] = useState(false)

	const onHoverHandler = useCallback(() => {
		setHover(true)
	}, [])

	const onLeaveHandler = useCallback(() => {
		setHover(false)
	}, [])

	return (
		<Link
			onMouseEnter={onHoverHandler}
			onMouseLeave={onLeaveHandler}
			target={target}
			to={to}
			className={classNamesHelp(styles.AppLink, {}, [
				className,
				fontSizeMapper(fontSize),
				fontWeightMapper(fontWeight),
				colorMapper(hover ? colorHover ?? color : color)
			])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})
