import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback } from "react"
import type { directionGeneralDataType } from "../../types/directionData.type"
import { DirectionCompactCard } from "./view/DirectionCompactCard/DirectionCompactCard"
import { DirectionFullCard } from "./view/DirectionFullCard/DirectionFullCard"

type DirectionCardProps = {
	className?: string
	typeCard?: "full" | "compact"
	data?: directionGeneralDataType
	onClick?: (direction: directionGeneralDataType) => void
}
export const DirectionCard = TypedMemo((props: DirectionCardProps) => {
	const { className, data, typeCard = "full", onClick } = props

	const onClickHandler = useCallback(() => {
		if (data) {
			onClick?.(data)
		}
	}, [data, onClick])

	if (typeCard === "full") {
		return (
			<DirectionFullCard
				className={className}
				data={data}
				onClick={onClickHandler}
			/>
		)
	}

	return (
		<DirectionCompactCard
			data={data}
			className={className}
		/>
	)
})
