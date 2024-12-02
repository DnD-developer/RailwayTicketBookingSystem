import type { appColorType, fontSizeType, fontWeightType } from "@customTypes/style.types"
import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { colorMapper } from "@helpers/colorMapper/colorMapper.helper"
import { fontSizeMapper, fontWeightMapper } from "@helpers/fontMapper/fontMapper.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type React from "react"
import { type ButtonHTMLAttributes, useCallback, useMemo, useState } from "react"
import styles from "./Button.module.scss"

type themesType = "defaultLight" | "defaultDark" | "transparentDark" | "transparentLight" | "clear"

type widthType = "s" | "m"
type heightType = "s" | "m"

type ButtonCustomProps = {
	theme: themesType
	width?: widthType
	height?: heightType
	color?: appColorType
	onClick: () => void
	textUppercase?: boolean
	fontWeight?: fontWeightType
	fontSize?: fontSizeType
	disabled?: boolean
	"data-testid"?: string
}

type ButtonProps = ButtonCustomProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonCustomProps>

const heightMapper: Record<heightType, string> = {
	s: styles.heightS,
	m: styles.heightM
}

const widthMapper: Record<widthType, string> = {
	s: styles.widthS,
	m: styles.widthM
}

export const Button = TypedMemo((props: ButtonProps) => {
	const {
		children,
		className,
		theme,
		disabled,
		onClick,
		width,
		height,
		color,
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
				height ? heightMapper[height] : "",
				width ? widthMapper[width] : "",
				fontWeightMapper(fontWeight),
				fontSizeMapper(fontSize),
				color ? colorMapper(color) : ""
			])}
			{...otherProps}
		>
			{children}
		</button>
	)
})
