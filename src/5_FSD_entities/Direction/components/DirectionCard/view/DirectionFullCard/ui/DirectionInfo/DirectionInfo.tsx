import { ArrowClearFromIcon, ArrowClearToIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { convertSecondsToTime } from "@helpers/convertSecondsToTime/convertSecondsToTime.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { directionDataType } from "../../../../../../types/directionData.type"
import styles from "./DirectionInfo.module.scss"

type DirectionInfoProps = {
	className?: string
	direction?: "there" | "back"
	data?: directionDataType
}
export const DirectionInfo = TypedMemo((props: DirectionInfoProps) => {
	const { className, data, direction = "there" } = props

	return (
		<HStack
			align={"flexStart"}
			justify={"spaceBetween"}
			gap={"gapM"}
			className={classNamesHelp("", {}, [className])}
		>
			<VStack
				gap={"gapXXS"}
				className={styles.DirectionInfo}
			>
				<Text
					fontSizeText={"m"}
					colorText={"main-dark"}
					fontWeightText={"ultra-fat"}
					text={convertSecondsToTime(data?.from.datetime || 0, true)}
				/>
				<Text
					text={data?.from.city.name}
					textTransform={"capitalize"}
					colorText={"main-dark"}
					fontSizeText={"s"}
				/>
				<Text
					text={`${data?.from.railway_station_name} вокзал`}
					colorText={"main-gray"}
					fontSizeText={"s"}
				/>
			</VStack>
			<VStack
				align={"center"}
				gap={"gapXXS"}
				widthMax={false}
			>
				<Text
					text={convertSecondsToTime(data?.duration || 0)}
					fontWeightText={"think"}
					colorText={"main-gray"}
					fontSizeText={"s"}
				/>
				{direction === "there" ?
					<ArrowClearToIcon className={styles.arrow} />
				:	<ArrowClearFromIcon className={styles.arrow} />}
			</VStack>
			<VStack className={styles.DirectionInfo}>
				<Text
					text={convertSecondsToTime(data?.to.datetime || 0, true)}
					fontSizeText={"m"}
					colorText={"main-dark"}
					fontWeightText={"ultra-fat"}
				/>
				<Text
					text={data?.to.city.name}
					textTransform={"capitalize"}
					colorText={"main-dark"}
					fontSizeText={"s"}
				/>
				<Text
					text={`${data?.to.railway_station_name} вокзал`}
					colorText={"main-gray"}
					fontSizeText={"s"}
				/>
			</VStack>
		</HStack>
	)
})
