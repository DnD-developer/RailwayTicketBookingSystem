import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { PropsWithChildren, ReactNode } from "react"
import { Children } from "react"
import type { carriageDataType } from "../../types/carrriageData.type"
import { CarriageParametres } from "../CarriageParametres/CarriageParametres"
import { CarriageType } from "../CarriageType/CarriageType"
import styles from "./CarriageInfo.module.scss"

type CarriageInfoProps = {
	className?: string
	data?: carriageDataType
	optionChanger?: ReactNode
} & testingProps &
	PropsWithChildren

export const CarriageInfo = TypedMemo((props: CarriageInfoProps) => {
	const { className, data, children } = props

	const mappedChildren = Children.toArray(children)

	return (
		<VStack
			className={classNamesHelp(styles.CarriageInfo, {}, [className])}
			gap={"S"}
		>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
				className={styles.title}
			>
				<Text
					title={"Вагон"}
					fontSizeTitle={"l"}
					fontWeightTitle={"ultra-fat"}
					TitleType={"h2"}
					colorTitle={"main-dark"}
				/>

				<CarriageType carriageClass={data?.class_type} />

				<Text
					text={"Места"}
					fontSizeText={"l"}
					fontWeightText={"fat"}
					colorText={"main-dark"}
				/>
			</HStack>

			<VStack>
				{mappedChildren?.[0]}
				<CarriageParametres data={data} />
			</VStack>

			{mappedChildren?.[1]}
			{mappedChildren?.[2]}
		</VStack>
	)
})

// Todo сделать фабрику моков
