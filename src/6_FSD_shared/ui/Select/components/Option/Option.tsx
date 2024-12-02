import { ListboxOption as HListBoxOption } from "@headlessui/react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Fragment } from "react"
import type { OptionType } from "../Select/Select"
import styles from "./OptionList.module.scss"

type OptionProps<T extends string> = {
	className?: string
	option: OptionType<T>
}
export const Option = TypedMemo(<T extends string>(props: OptionProps<T>) => {
	const { className, option } = props

	return (
		<HListBoxOption
			as={Fragment}
			value={option.value}
		>
			{({ focus }) => {
				return (
					<li
						className={classNamesHelp(
							styles.option,
							{
								[styles.focus]: focus
							},
							[className]
						)}
					>
						{option.content}
					</li>
				)
			}}
		</HListBoxOption>
	)
})
