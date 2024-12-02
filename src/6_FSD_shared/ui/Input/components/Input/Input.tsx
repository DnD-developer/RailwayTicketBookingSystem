import type { appColorType, fontSizeType, fontWeightType } from "@customTypes/style.types"
import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { colorMapper } from "@helpers/colorMapper/colorMapper.helper"
import { fontSizeMapper, fontWeightMapper } from "@helpers/fontMapper/fontMapper.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { ChangeEvent, FC, InputHTMLAttributes, SVGProps } from "react"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { VStack } from "../../../Stack"
import styles from "./Input.module.scss"

type heightType = "s" | "m"

type InputCustomProps<T extends number | string> = {
	className?: string
	error?: boolean
	value: T
	height: heightType
	onChange?: (value: T) => void
	onClick?: () => void
	autoFocus?: boolean
	fontSize?: fontSizeType
	fontWeight?: fontWeightType
	label?: string
	classNamesLabel?: string
	fontSizeLabel?: fontSizeType
	fontWeightLabel?: fontWeightType
	colorLabel?: appColorType
	readOnly?: boolean
	Icon?: FC<SVGProps<SVGSVGElement>>
	type?: string
	"data-testid"?: string
}

type InputProps<T extends number | string> = InputCustomProps<T> &
	Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputCustomProps<T>>

const heightMapper: Record<heightType, string> = {
	s: styles.heightS,
	m: styles.heightM
}

export const Input = TypedMemo(<T extends string | number>(props: InputProps<T>) => {
	const {
		className,
		value,
		onChange,
		autoFocus = false,
		error = false,
		onClick,
		label = "",
		classNamesLabel,
		fontSize = "m",
		fontWeight = "medium",
		fontSizeLabel = "m",
		fontWeightLabel = "think",
		colorLabel = "main-dark",
		type = "text",
		height = "m",
		Icon,
		"data-testid": dataTestId = "input-ui",
		readOnly = false,
		...otherProps
	} = props

	const inputRef = useRef<HTMLInputElement>(null)

	const onClickHandler = useCallback(() => {
		onClick?.()
	}, [onClick])

	useEffect(() => {
		if (autoFocus) {
			inputRef.current?.focus()
		}
	}, [autoFocus])

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target

			onChange?.(value as T)
		},
		[onChange]
	)

	const mods = useMemo<Mods>(() => {
		return {
			[styles.error]: error,
			[styles.withIcon]: Boolean(Icon)
		}
	}, [Icon, error])

	const inputElement = (
		<input
			data-testid={`${dataTestId}.InputElement`}
			ref={inputRef}
			type={type}
			readOnly={readOnly}
			className={classNamesHelp(styles.Input, mods, [
				className,
				heightMapper[height],
				fontSizeMapper(fontSize),
				fontWeightMapper(fontWeight)
			])}
			value={value}
			onChange={onChangeHandler}
			{...otherProps}
		/>
	)

	const inputElementWithIcon = (
		<div className={classNamesHelp(styles.wrapper, {}, [className])}>
			{inputElement}
			{Icon ?
				<Icon
					className={classNamesHelp(
						styles.icon,
						{ [styles.iconCursor]: Boolean(onClick) },
						[className]
					)}
					onClick={onClickHandler}
				/>
			:	<></>}
		</div>
	)

	const labelElement = (
		<label
			className={classNamesHelp(styles.wrapper, mods, [
				classNamesLabel,
				fontSizeMapper(fontSizeLabel),
				fontWeightMapper(fontWeightLabel),
				colorMapper(colorLabel)
			])}
			data-testid={`${dataTestId}.LabelElement`}
		>
			<VStack gap={"gapS"}>
				{label}
				{Icon ? inputElementWithIcon : inputElement}
			</VStack>
		</label>
	)

	return (
		label ? labelElement
		: Icon ? inputElementWithIcon
		: inputElement
	)
})
