import { getRouteTicket } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import type { ReactNode } from "react"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import type { carriageClassType, carriagePriceType } from "../../../../../Carriage"
import type { directionsGeneralDataType } from "../../../../types/directionData.type"
import { ServicesIcon } from "../../ui/ServicesIcon/ServicesIcon"
import styles from "./DirectionFullCard.module.scss"
import { CarriageInfoItem } from "./ui/CarriageInfoItem/CarriageInfoItem"
import { DirectionInfo } from "./ui/DirectionInfo/DirectionInfo"
import { TrainInfo } from "./ui/TrainInfo/TrainInfo"

type DirectionFullCardProps = {
	className?: string
	data?: directionsGeneralDataType
	detailedPrice?: ReactNode
}
export const DirectionFullCard = TypedMemo((props: DirectionFullCardProps) => {
	const { className, data, detailedPrice } = props

	const navigate = useNavigate()

	const [isOpenDetailedPrice, setIsOpenDetailedPrice] = useState<boolean>(false)

	const onDetailedPriceShowHandler = useCallback(() => {
		setIsOpenDetailedPrice(prev => !prev)
	}, [])

	//eslint-disable-next-line
	const onClick = useCallback(() => {
		if (data?.id) {
			navigate(getRouteTicket(data?.id).route)
		}
	}, [data?.id, navigate])

	return (
		<HStack
			className={classNamesHelp(
				styles.DirectionFullCard,
				{
					[styles.sHeight]:
						Boolean(!data?.arrival) &&
						Object.entries(data?.departure?.price_info || {}).length <= 2,
					[styles.mHeight]:
						Boolean(data?.arrival) ||
						Object.entries(data?.departure?.price_info || {}).length > 2
				},
				[className]
			)}
			gap={"gapL"}
			justify={"spaceBetween"}
		>
			<TrainInfo data={data} />
			<VStack
				className={styles.directionsInfo}
				gap={"gapXL"}
			>
				<DirectionInfo
					data={data?.departure}
					direction={"there"}
				/>
				{data?.arrival ?
					<DirectionInfo
						data={data?.arrival}
						direction={"back"}
					/>
				:	null}
			</VStack>
			<VStack
				className={styles.priceInfo}
				align={"flexEnd"}
				gap={"gapL"}
				justify={"spaceBetween"}
			>
				<VStack gap={"gapL"}>
					{Object.entries(data?.departure?.price_info || {}).map(
						([key, value], index) => {
							const carriageClass = key as carriageClassType
							const carriagePrice = value as carriagePriceType
							return (
								<CarriageInfoItem
									key={index}
									detailedPrice={detailedPrice}
									data={data}
									onDetailedPriceShow={onDetailedPriceShowHandler}
									isOpenDetailedPrice={isOpenDetailedPrice}
									carriageClass={carriageClass}
									carriagePrice={carriagePrice}
								/>
							)
						}
					)}
				</VStack>

				<VStack
					gap={"gapS"}
					align={"flexEnd"}
				>
					<ServicesIcon
						isConditioner={data?.departure?.have_air_conditioning}
						isWifi={data?.departure?.have_wifi}
						isExpress={data?.departure?.is_express}
					/>
					<Button
						theme={"defaultLight"}
						height={"s"}
						width={"s"}
						onClick={onClick}
					>
						Выбрать места
					</Button>
				</VStack>
			</VStack>
		</HStack>
	)
})
