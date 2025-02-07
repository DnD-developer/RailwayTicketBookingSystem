import type { testingProps } from "@customTypes/testing.types"
import type { carriageDataFromServerType } from "@entities/Carriage/types/carrriageData.type"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback } from "react"
import styles from "./CarriageChanger.module.scss"

type CarriageChangerProps = {
	className?: string
	data?: carriageDataFromServerType[]
	onClick?: (id: string) => void
	activeId?: string
} & testingProps

export const CarriageChanger = TypedMemo((props: CarriageChangerProps) => {
	const { className, data, onClick, activeId } = props

	const onClickHandler = useCallback(
		(id: string) => () => {
			onClick?.(id)
		},
		[onClick]
	)

	return (
		<HStack
			className={classNamesHelp(styles.CarriageChanger, undefined, [className])}
			gap={"S"}
			align={"center"}
		>
			<Text
				text={"Вагоны"}
				fontSizeText={"s"}
				fontWeightText={"medium"}
				colorText={"main-dark"}
			/>
			<HStack
				gap={"XS"}
				align={"center"}
			>
				{data?.map(carriage => (
					<li
						key={carriage.coach._id}
						onClick={onClickHandler(carriage.coach._id)}
						className={styles.item}
					>
						<Text
							text={carriage.coach.name}
							fontSizeText={"s"}
							fontWeightText={"ultra-fat"}
							colorText={carriage.coach._id === activeId ? "main-light" : "main-dark"}
						/>
					</li>
				))}
			</HStack>
		</HStack>
	)
})
