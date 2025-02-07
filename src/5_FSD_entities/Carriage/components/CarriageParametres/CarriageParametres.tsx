import { ConditionerIcon, LinensIcon, WifiIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { carriageDataType } from "../../types/carrriageData.type"
import styles from "./CarriageParametres.module.scss"
import { CarriageOptionItem } from "./ui/CarriageOptionItem/CarriageOptionItem"

type CarriageParametresProps = {
	className?: string
	data?: carriageDataType
} & testingProps

export const CarriageParametres = TypedMemo((props: CarriageParametresProps) => {
	const { className, data } = props

	return (
		<HStack
			className={classNamesHelp(styles.carriageParametres, undefined, [className])}
			align={"center"}
			justify={"spaceBetween"}
		>
			<VStack
				justify={"center"}
				align={"center"}
				className={styles.carriageName}
				widthMax={true}
			>
				<Text
					title={data?.name}
					fontWeightTitle={"ultra-fat"}
					colorTitle={"main-dark"}
					fontSizeTitle={"l"}
				/>
			</VStack>
			<VStack
				widthMax={false}
				gap={"M"}
			>
				<HStack
					gap={"S"}
					align={"center"}
					widthMax={false}
				>
					<Text
						text={"Сводобные Места:"}
						colorText={"main-dark"}
						fontSizeText={"m"}
						fontWeightText={"medium"}
					/>
					<Text
						text={data?.available_seats.toString()}
						colorText={"main-dark"}
						fontSizeText={"m"}
						fontWeightText={"fat"}
					/>
				</HStack>

				<HStack
					gap={"S"}
					align={"center"}
					widthMax={false}
				>
					<Text
						text={"Стоимость:"}
						colorText={"main-dark"}
						fontSizeText={"m"}
						fontWeightText={"medium"}
					/>
					<HStack
						widthMax={false}
						gap={"XS"}
					>
						<Text
							text={data?.top_price?.toString()}
							colorText={"main-dark"}
							fontSizeText={"m"}
							fontWeightText={"fat"}
						/>
						<span className={styles.currency}>{"₽"}</span>
					</HStack>
				</HStack>
			</VStack>

			<VStack
				gap={"M"}
				align={"center"}
				widthMax={false}
			>
				<Text
					text={"Обслуживание ФПК"}
					colorText={"main-dark"}
					fontSizeText={"m"}
					fontWeightText={"medium"}
				/>
				<HStack
					TagType={"ul"}
					gap={"S"}
					widthMax={false}
				>
					<CarriageOptionItem
						active={data?.have_wifi}
						Icon={WifiIcon}
					/>
					<CarriageOptionItem
						active={data?.have_air_conditioning}
						Icon={ConditionerIcon}
					/>
					<CarriageOptionItem
						active={data?.is_linens_included}
						Icon={LinensIcon}
					/>
				</HStack>
			</VStack>
		</HStack>
	)
})
