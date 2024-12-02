import { DirectionCard, useGetDirectionsListDataSelector } from "@entities/Direction"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"

import styles from "./DirectionsList.module.scss"

type DirectionsListProps = {
	className?: string
}
export const DirectionsList = TypedMemo((props: DirectionsListProps) => {
	const { className } = props

	const data = useGetDirectionsListDataSelector()

	return (
		<VStack className={classNamesHelp(styles.DirectionsList, {}, [className])}>
			<VStack gap={"gapXL"}>
				{data.map(direction => (
					<DirectionCard
						key={direction.id}
						data={direction}
					/>
				))}
			</VStack>
		</VStack>
	)
})
