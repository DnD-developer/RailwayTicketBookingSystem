import { DateInput } from "@features/DateInput"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useMemo } from "react"
import styles from "./DateInputs.module.scss"

type DateInputsProps = {
	className?: string
	arrivalDate?: string
	departureDate?: string
	onSaveArrivalDate: (value: string) => void
	onSaveDepartureDate: (value: string) => void
}
export const DateInputs = TypedMemo((props: DateInputsProps) => {
	const { className, onSaveDepartureDate, onSaveArrivalDate, departureDate, arrivalDate } = props

	const dateFrom = useMemo(() => (arrivalDate ? new Date(arrivalDate) : undefined), [arrivalDate])

	const dateTo = useMemo(
		() => (departureDate ? new Date(departureDate) : undefined),
		[departureDate]
	)

	return (
		<VStack
			gap={"gapM"}
			className={classNamesHelp(styles.DateInputs, {}, [className])}
		>
			<VStack gap="gapXS">
				<Text
					TitleType={"h4"}
					title={"Дата поездки"}
					fontSizeTitle={"m"}
					fontWeightTitle={"medium"}
					colorTitle={"main-light"}
				/>
				<DateInput
					size={"think"}
					onSaveToForm={onSaveArrivalDate}
					value={dateFrom}
				/>
			</VStack>
			<VStack gap={"gapXS"}>
				<Text
					TitleType={"h4"}
					title={"Дата возвращения"}
					fontSizeTitle={"m"}
					fontWeightTitle={"medium"}
					colorTitle={"main-light"}
				/>
				<DateInput
					size={"think"}
					onSaveToForm={onSaveDepartureDate}
					value={dateTo}
				/>
			</VStack>
		</VStack>
	)
})
