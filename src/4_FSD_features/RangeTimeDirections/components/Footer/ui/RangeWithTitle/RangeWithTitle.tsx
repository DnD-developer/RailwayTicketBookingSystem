import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Range } from "@ui/Range"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import styles from "./RangeWithTitle.module.scss"

type RangeWithTitleProps = {
	className?: string
	title?: string
	onChange?: (values: number[]) => void
	values?: number[]
	align?: "left" | "right"
}
export const RangeWithTitle = TypedMemo((props: RangeWithTitleProps) => {
	const { className, title, onChange, align = "left", values } = props

	return (
		<VStack className={classNamesHelp("", {}, [className])}>
			<Text
				className={styles.title}
				title={title}
				fontSizeTitle={"m"}
				TitleType={"h4"}
				align={align}
				colorTitle={"main-gray"}
				fontWeightTitle={"medium"}
			/>
			<Range
				range={values}
				min={0}
				max={86400}
				typeRange={"time"}
				onChange={onChange}
			/>
		</VStack>
	)
})
