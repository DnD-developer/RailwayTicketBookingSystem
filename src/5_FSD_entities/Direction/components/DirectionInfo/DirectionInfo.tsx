import { ArrowClearToIcon, ClockIcon, TrainSmallIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { directionDataType } from "../../types/directionData.type"
import styles from "./DirectionInfo.module.scss"
import { TimeInfoItem } from "./ui/TimeInfoItem/TimeInfoItem"

type DirectionInfoProps = {
	className?: string
	data?: directionDataType
} & testingProps

export const DirectionInfo = TypedMemo((props: DirectionInfoProps) => {
	const { className, data } = props

	const hour = Math.trunc((data?.duration || 0) / (60 * 60))
	const minutes = Math.round(((data?.duration || 0) % (60 * 60)) / 60)

	return (
		<HStack
			className={classNamesHelp(styles.DirectionInfo, {}, [className])}
			align={"center"}
			justify={"spaceBetween"}
		>
			<HStack
				align={"center"}
				gap={"M"}
				widthMax={false}
			>
				<TrainSmallIcon className={styles.trainIcon} />
				<VStack
					gap={"XS"}
					widthMax={false}
				>
					<Text
						title={data?.train?.name}
						fontSizeTitle={"m"}
						colorTitle={"main-dark"}
						fontWeightTitle={"ultra-fat"}
					/>
					<VStack
						gap={"XXS"}
						widthMax={false}
					>
						<Text
							text={`${data?.from?.city.name} →`}
							fontSizeText={"s"}
							fontWeightText={"medium"}
							colorText={"main-dark"}
							textTransform={"capitalize"}
						/>
						<Text
							text={data?.to?.city.name}
							fontSizeText={"s"}
							fontWeightText={"medium"}
							colorText={"main-dark"}
							textTransform={"capitalize"}
						/>
					</VStack>
				</VStack>
			</HStack>
			<HStack
				widthMax={false}
				align={"center"}
				gap={"XL"}
			>
				<TimeInfoItem data={data?.from} />
				<ArrowClearToIcon className={styles.arrowIcon} />
				<TimeInfoItem data={data?.to} />
			</HStack>
			<HStack
				widthMax={false}
				align={"center"}
				gap={"XS"}
			>
				<ClockIcon className={styles.clockIcon} />
				<VStack widthMax={false}>
					<Text
						text={`${hour} h`}
						fontSizeText={"m"}
						colorText={"main-dark"}
						fontWeightText={"medium"}
					/>
					<Text
						text={`${minutes} m`}
						fontSizeText={"m"}
						colorText={"main-dark"}
						fontWeightText={"medium"}
					/>
				</VStack>
			</HStack>
		</HStack>
	)
})
