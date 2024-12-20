import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type React from "react"
import { type ButtonHTMLAttributes, memo, useMemo, useState, useCallback } from "react"
import styles from "./Button.module.scss"
import type { fontWeightType, fontSizeType } from "@customTypes/style.types"
import { fontWeightMapper, fontSizeMapper } from "@helpers/fontMapper/fontMapper.helper"

type themesType = "defaultLight" | "defaultDark" | "transparentDark" | "transparentLight"

type widthType = "s" | "m"
type heightType = "s" | "m"

type ButtonProps = {
	theme: themesType
	width: widthType
	height: heightType
	onClick: () => void
	textUppercase?: boolean
	fontWeight?: fontWeightType
	fontSize?: fontSizeType
	disabled?: boolean
	"data-testid"?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const heightMapper: Record<heightType, string> = {
	s: styles.heightS,
	m: styles.heightM
}

const widthMapper: Record<widthType, string> = {
	s: styles.widthS,
	m: styles.widthM
}

export const Button = memo<ButtonProps>(props => {
	const {
		children,
		className,
		theme,
		disabled,
		onClick,
		width,
		height,
		"data-testid": dataTestId = "button-ui",
		fontWeight = "ultra-fat",
		textUppercase,
		fontSize = "m",
		...otherProps
	} = props

	const [click, setClick] = useState(false)

	const mods = useMemo<Mods>(() => {
		return {
			[styles.disabled]: disabled,
			[styles.click]: click,
			[styles.uppercase]: textUppercase
		}
	}, [click, disabled, textUppercase])

	const onClickHandler = useCallback(
		(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			event.preventDefault()

			if (!disabled) {
				onClick()
			}
		},
		[disabled, onClick]
	)

	const onMouseDownHandler = useCallback(() => {
		if (!disabled) {
			setClick(true)
		}
	}, [disabled])

	const onMouseUpHandler = useCallback(() => {
		if (!disabled) {
			setClick(false)
		}
	}, [disabled])

	return (
		<button
			onClick={onClickHandler}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}
			data-testid={dataTestId}
			className={classNamesHelp(styles.Button, mods, [
				className,
				styles[theme],
				heightMapper[height],
				widthMapper[width],
				fontWeightMapper(fontWeight),
				fontSizeMapper(fontSize)
			])}
			{...otherProps}
		>
			{children}
		</button>
	)
})
