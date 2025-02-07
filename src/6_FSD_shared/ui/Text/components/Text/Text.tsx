import type { appColorType, fontSizeType, fontWeightType } from "@customTypes/style.types"
import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { colorMapper } from "@helpers/colorMapper/colorMapper.helper"
import { fontSizeMapper, fontWeightMapper } from "@helpers/fontMapper/fontMapper.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useMemo } from "react"
import styles from "./Text.module.scss"

type titleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type alignType = "left" | "center" | "right"

type TextProps = {
	className?: string
	text?: string
	title?: string
	align?: alignType
	TitleType?: titleType
	fontSizeTitle?: fontSizeType
	fontWeightTitle?: fontWeightType
	colorTitle?: appColorType
	fontSizeText?: fontSizeType
	fontWeightText?: fontWeightType
	colorText?: appColorType
	classNamesText?: string
	classNameTitle?: string
	widthMax?: boolean
	textTransform?: "capitalize" | "uppercase"
}

export const Text = TypedMemo((props: TextProps) => {
	const {
		className,
		text,
		classNamesText,
		classNameTitle,
		align = "left",
		title,
		fontSizeText = "m",
		fontSizeTitle = "l",
		fontWeightText = "medium",
		fontWeightTitle = "fat",
		colorText = "main-gray",
		TitleType = "h2",
		widthMax = false,
		colorTitle = "main-gray",
		textTransform = "normal"
	} = props

	const modsText = useMemo<Mods>(() => {
		return { [styles.textMargin]: title ? true : false }
	}, [title])

	return (
		<div
			className={classNamesHelp(styles.TextWrapper, { [styles.widthMax]: widthMax }, [
				className
			])}
		>
			{title ?
				<TitleType
					className={classNamesHelp("", {}, [
						classNameTitle,
						styles[align],
						styles[textTransform],
						fontSizeMapper(fontSizeTitle),
						fontWeightMapper(fontWeightTitle),
						colorMapper(colorTitle)
					])}
				>
					{title}
				</TitleType>
			:	null}
			{text ?
				<p
					className={classNamesHelp("", modsText, [
						styles[align],
						classNamesText,
						styles[textTransform],
						fontSizeMapper(fontSizeText),
						fontWeightMapper(fontWeightText),
						colorMapper(colorText)
					])}
				>
					{text}
				</p>
			:	null}
		</div>
	)
})
