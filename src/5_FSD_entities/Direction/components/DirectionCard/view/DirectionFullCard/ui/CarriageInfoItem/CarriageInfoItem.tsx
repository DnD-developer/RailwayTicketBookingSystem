import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { ReactNode } from "react"
import {
	type carriageClassType,
	type carriagePriceType,
	getMinPriceForSeat,
	mapperCarriageTypeName
} from "../../../../../../../Carriage"
import type { directionsGeneralDataType } from "../../../../../../types/directionData.type"
import styles from "./CarriageInfoItem.module.scss"

type CarriageInfoItemProps = {
	className?: string
	detailedPrice?: ReactNode
	onDetailedPriceShow: () => void
	isOpenDetailedPrice: boolean
	data?: directionsGeneralDataType
	carriageClass: carriageClassType
	carriagePrice: carriagePriceType
}
export const CarriageInfoItem = TypedMemo((props: CarriageInfoItemProps) => {
	const {
		className,
		isOpenDetailedPrice,
		onDetailedPriceShow,
		detailedPrice,
		data,
		carriagePrice,
		carriageClass
	} = props

	return (
		<HStack
			className={classNamesHelp("", {}, [className])}
			align={"center"}
			justify={"spaceBetween"}
		>
			<Text
				text={mapperCarriageTypeName(carriageClass)}
				fontSizeText={"s"}
				colorText={"main-dark"}
			/>
			<div className={styles.countSeat}>
				<Button
					theme={"clear"}
					onClick={onDetailedPriceShow}
				>
					<Text
						fontSizeText={"xs"}
						colorText={"accent-orange"}
						fontWeightText={"fat"}
						text={data?.departure?.available_seats_info[carriageClass]?.toString()}
					/>
				</Button>
				{isOpenDetailedPrice ? detailedPrice : <></>}
			</div>

			<HStack
				gap={"gapXS"}
				widthMax={false}
				align={"center"}
			>
				<span className={styles.spanFrom}>от</span>
				<Text
					fontSizeText={"m"}
					colorText={"main-dark"}
					fontWeightText={"ultra-fat"}
					text={`${getMinPriceForSeat(carriagePrice).toString()}`}
				/>
				<span className={styles.spanCurrency}>₽</span>
			</HStack>
		</HStack>
	)
})
