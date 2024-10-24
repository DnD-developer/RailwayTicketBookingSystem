import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { ChangeEvent, InputHTMLAttributes } from "react"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { VStack } from "../../../Stack"
import styles from "./Input.module.scss"
import { TypedMemo } from "@sharedProviders/TypedMemo"

type InputCustomProps<T extends number | string> = {
	className?: string
	inverted?: boolean
	error?: boolean
	value?: T
	onChange?: (value: T) => void
	autoFocus?: boolean
	label?: string
	classNamesLabel?: string
	readOnly?: boolean
	type?: string
	"data-testid"?: string
}

type InputProps<T extends number | string> = InputCustomProps<T> &
	Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputCustomProps<T>>

export const Input = TypedMemo(<T extends string | number>(props: InputProps<T>) => {
	const {
		className,
		value,
		onChange,
		autoFocus = false,
		label = "",
		classNamesLabel,
		type = "text",
		"data-testid": dataTestId = "Input",
		readOnly = false,
		...otherProps
	} = props

	const inputRef = useRef<HTMLInputElement>(null)

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
		return {}
	}, [])

	const inputElement = () => (
		<input
			data-testid={`${dataTestId}.InputElement`}
			ref={inputRef}
			type={type}
			readOnly={readOnly}
			className={classNamesHelp(styles.Input, mods, [className])}
			value={value}
			onChange={onChangeHandler}
			{...otherProps}
		/>
	)

	if (label) {
		return (
			<label
				className={classNamesHelp("", mods, [classNamesLabel])}
				data-testid={`${dataTestId}.LabelElement`}
			>
				<VStack gap={"gap8"}>
					{label}
					{inputElement()}
				</VStack>
			</label>
		)
	}

	return inputElement()
})
