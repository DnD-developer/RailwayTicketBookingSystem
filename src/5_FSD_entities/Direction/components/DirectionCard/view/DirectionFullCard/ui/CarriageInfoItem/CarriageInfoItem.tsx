import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import {
	type carriageClassType,
	type carriagePriceType,
	getMinPriceForSeat,
	mapperCarriageTypeName
} from "../../../../../../../Carriage"
import type { directionGeneralDataType } from "../../../../../../types/directionData.type"
import { FromSum } from "../../../../ui/FromSum/FromSum"
import styles from "./CarriageInfoItem.module.scss"

type CarriageInfoItemProps = {
	className?: string
	data?: directionGeneralDataType
	carriageClass: carriageClassType
	carriagePrice: carriagePriceType
}
export const CarriageInfoItem = TypedMemo((props: CarriageInfoItemProps) => {
	const { className, data, carriagePrice, carriageClass } = props

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
				<Text
					fontSizeText={"xs"}
					colorText={"accent-orange"}
					fontWeightText={"fat"}
					text={data?.departure?.available_seats_info[carriageClass]?.toString()}
				/>
			</div>

			<FromSum
				sum={getMinPriceForSeat(carriagePrice)}
				color={"main-dark"}
			/>
		</HStack>
	)
})
