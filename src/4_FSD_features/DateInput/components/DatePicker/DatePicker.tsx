import type { PickerProps } from "headless-datetimepicker"
import { Datepicker } from "headless-datetimepicker"
import type { LegacyRef, ElementType, RefObject } from "react"
import { memo, useCallback } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import styles from "./DatePicker.module.scss"
import { Text } from "@ui/Text"
import { HStack } from "@ui/Stack"
import { whatIsDate } from "../../lib/helpers/whatIsDate/whatIsDate.helper"

type DatePickerProps = {
	className?: string
	isOpen: boolean
	value?: Date | null
	onPick: (value: Date) => void
	ref?: RefObject<HTMLElement | undefined>
} & PickerProps

export const DatePicker = memo<DatePickerProps>(props => {
	const { className, value, onPick, isOpen, ref } = props
	// To Feature: lazy library

	const onChangeHandler = useCallback(
		(value: Date | null) => {
			if (value) {
				onPick(value)
			}
		},
		[onPick]
	)

	return (
		<Datepicker
			onChange={onChangeHandler}
			value={value}
			startOfWeek={1}
			ref={ref as LegacyRef<ElementType> | undefined}
		>
			<Datepicker.Picker
				defaultType="day"
				className={classNamesHelp(styles.DatePicker, {}, [className])}
				alwaysOpen={isOpen}
			>
				{({ monthName, month, year }) => (
					<>
						<HStack
							align={"center"}
							justify={"center"}
							className={styles.header}
						>
							<Datepicker.Button
								action="prev"
								className={styles.arrowLeft}
							></Datepicker.Button>

							<Text
								text={`${monthName} ${year}`}
								colorText={"main-dark"}
								fontSizeText={"m"}
								fontWeightText={"fat"}
							/>

							<Datepicker.Button
								className={styles.arrowRight}
								action="next"
							></Datepicker.Button>
						</HStack>

						<Datepicker.Items className={styles.listItems}>
							{({ items }) =>
								items.map(item => {
									if (!item.isHeader) {
										if (typeof item.value != "number") {
											const {
												isLastDateCurrentMonth,
												isOtherMonth,
												isWeekend,
												isPast
											} = whatIsDate(item.value, month)
											return (
												<Datepicker.Item
													className={classNamesHelp(
														styles.item,
														{
															[styles.weekend]: isWeekend,
															[styles.lastDate]:
																isLastDateCurrentMonth,
															[styles.otherMonth]:
																(isPast || isOtherMonth) &&
																!isLastDateCurrentMonth,
															[styles.today]: item.isToday,
															[styles.isSelected]: item.isSelected,
															[styles.allowed]: !isPast
														},
														[]
													)}
													disabled={isPast}
													key={item.key}
													item={item}
													action="close"
												>
													{item.text}
												</Datepicker.Item>
											)
										}
									}
								})
							}
						</Datepicker.Items>
					</>
				)}
			</Datepicker.Picker>
		</Datepicker>
	)
})
