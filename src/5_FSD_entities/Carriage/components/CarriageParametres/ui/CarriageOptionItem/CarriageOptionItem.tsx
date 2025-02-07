import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import type React from "react"
import styles from "./CarriageOptionItem.module.scss"

type CarriageOptionItemProps = {
	className?: string
	active?: boolean
	Icon: React.FC<React.SVGProps<SVGSVGElement>>
} & testingProps

export const CarriageOptionItem = TypedMemo((props: CarriageOptionItemProps) => {
	const { className, active = false, Icon } = props

	return (
		<VStack
			TagType={"li"}
			align={"center"}
			justify={"center"}
			widthMax={false}
			className={classNamesHelp(styles.CarriageOptionItem, { [styles.active]: active }, [
				className
			])}
		>
			<Icon className={styles.icon} />
		</VStack>
	)
})
