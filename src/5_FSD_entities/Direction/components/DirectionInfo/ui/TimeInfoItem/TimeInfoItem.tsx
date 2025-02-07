import type { testingProps } from "@customTypes/testing.types"
import { convertSecondsToTime } from "@helpers/convertSecondsToTime/convertSecondsToTime.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { stationDataType } from "../../../../../Station"

type TimeInfoItemProps = {
	className?: string
	data?: stationDataType
} & testingProps

export const TimeInfoItem = TypedMemo((props: TimeInfoItemProps) => {
	const { className, data } = props

	return (
		<VStack
			className={className}
			gap={"XS"}
			widthMax={false}
		>
			<Text
				text={convertSecondsToTime(data?.datetime || 0, true)}
				fontSizeText={"m"}
				colorText={"main-dark"}
				fontWeightText={"ultra-fat"}
			/>
			<VStack
				gap={"XXS"}
				widthMax={false}
			>
				<Text
					text={data?.city?.name}
					textTransform={"capitalize"}
					colorText={"main-dark"}
					fontSizeText={"s"}
					fontWeightText={"medium"}
				/>
				<Text
					text={`${data?.railway_station_name} вокзал`}
					colorText={"main-gray"}
					fontSizeText={"s"}
					fontWeightText={"medium"}
				/>
			</VStack>
		</VStack>
	)
})
