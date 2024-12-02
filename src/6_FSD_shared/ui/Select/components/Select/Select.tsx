import {
	Listbox as HListBox,
	ListboxButton as HListBoxButton,
	ListboxOptions as HListBoxOptions
} from "@headlessui/react"
import type { AnchorPropsWithSelection } from "@headlessui/react/dist/internal/floating"
import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback, useMemo } from "react"
import { Option } from "../Option/Option"
import styles from "./Select.module.scss"

export type OptionType<T extends string> = {
	value: T
	content: string
}

export type SelectProps<T extends string> = {
	className?: string
	classNamesLabel?: string
	options: OptionType<T>[]
	label?: string
	disabled?: boolean
	defaultValue?: T
	value?: T
	onChange?: (value: T) => void
}

export const Select = TypedMemo(<T extends string>(props: SelectProps<T>) => {
	const { className, classNamesLabel, options, disabled, defaultValue, value, label, onChange } =
		props

	const onChangeHandler = useCallback(
		(value: T) => {
			onChange?.(value)
		},
		[onChange]
	)

	const mods: Mods = useMemo(() => {
		return {
			[styles.readonly]: disabled
		}
	}, [disabled])

	const anchor: AnchorPropsWithSelection = useMemo(
		() => ({
			gap: 8,
			to: "bottom"
		}),
		[]
	)

	const triggerContent = options.filter(opt => opt.value == value)[0]?.content || defaultValue

	const hSelectComponent = (
		<HListBox
			className={classNamesHelp(styles.Select, mods, [className])}
			as="div"
			value={value}
			disabled={disabled}
			onChange={onChangeHandler}
		>
			<HListBoxButton className={styles.trigger}>{triggerContent}</HListBoxButton>
			<HListBoxOptions
				className={styles.list}
				anchor={anchor}
			>
				{options.map(opt => (
					<Option
						option={opt}
						key={opt.value}
					/>
				))}
			</HListBoxOptions>
		</HListBox>
	)

	if (label) {
		return (
			<label className={classNamesHelp(styles.label, mods, [classNamesLabel])}>
				{label}
				{hSelectComponent}
			</label>
		)
	}

	return hSelectComponent
})
