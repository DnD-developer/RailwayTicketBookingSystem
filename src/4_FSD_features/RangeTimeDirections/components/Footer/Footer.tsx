import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { RangeWithTitle } from "./ui/RangeWithTitle/RangeWithTitle"

type FooterProps = {
	className?: string
	isOpen?: boolean
	arrivalRange?: number[]
	departureRange?: number[]
	onChangeArrivalRange?: (arrivalRange: number[]) => void
	onChangeDepartureRange?: (arrivalRange: number[]) => void
}
export const Footer = TypedMemo((props: FooterProps) => {
	const {
		className,
		isOpen = false,
		arrivalRange,
		departureRange,
		onChangeDepartureRange,
		onChangeArrivalRange
	} = props

	if (!isOpen) return null

	return (
		<VStack
			className={classNamesHelp("", {}, [className])}
			gap={"gapXL"}
		>
			<RangeWithTitle
				title={"Время отбытия"}
				align={"left"}
				values={arrivalRange}
				onChange={onChangeArrivalRange}
			/>
			<RangeWithTitle
				title={"Время прибытия"}
				align={"right"}
				values={departureRange}
				onChange={onChangeDepartureRange}
			/>
		</VStack>
	)
})
