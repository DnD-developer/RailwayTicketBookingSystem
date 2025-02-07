import { CupeIcon, LuxIcon, PlackartIcon, SitPlaceIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type React from "react"
import { mapperCarriageTypeName } from "../../lib/helpers/mapperCarriageTypeName/mapperCarriageTypeName.helper"
import type { carriageClassType } from "../../types/carrriageData.type"
import styles from "./CarriageType.module.scss"

type CarriageTypeProps = {
	className?: string
	carriageClass?: carriageClassType
} & testingProps

export const CarriageType = TypedMemo((props: CarriageTypeProps) => {
	const { className, carriageClass = "fourth" } = props

	let Icon: React.FC<React.SVGProps<SVGSVGElement>>

	switch (carriageClass) {
		case "fourth":
			Icon = SitPlaceIcon
			break
		case "third":
			Icon = PlackartIcon
			break
		case "second":
			Icon = CupeIcon
			break
		default:
			Icon = LuxIcon
	}

	return (
		<VStack
			className={classNamesHelp(undefined, undefined, [className])}
			align={"center"}
			justify={"center"}
			widthMax={false}
			gap={"S"}
		>
			{<Icon className={styles.icon} />}

			<Text
				text={mapperCarriageTypeName(carriageClass)}
				colorText={"accent-orange"}
				fontSizeText={"l"}
				fontWeightText={"medium"}
			/>
		</VStack>
	)
})
