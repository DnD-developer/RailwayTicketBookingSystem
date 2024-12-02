import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Range } from "@ui/Range"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import styles from "./RangeCost.module.scss"

type RangeCostProps = {
	className?: string
	min?: number
	max?: number
	range?: number[]
	onChange?: (value: number[]) => void
}
export const RangeCost = TypedMemo((props: RangeCostProps) => {
	const { className, min, max, range, onChange } = props

	return (
		<VStack className={classNamesHelp(styles.RangeCost, {}, [className])}>
			<Text
				title={"Стоимость"}
				TitleType={"h4"}
				fontSizeTitle={"m"}
				fontWeightTitle={"medium"}
				colorTitle={"main-light"}
			/>
			<Range
				min={min}
				max={max}
				range={range}
				onChange={onChange}
			/>
		</VStack>
	)
})
