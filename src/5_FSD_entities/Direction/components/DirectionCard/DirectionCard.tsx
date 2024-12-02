import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { directionsGeneralDataType } from "../../types/directionData.type"
import { DirectionFullCard } from "./view/DirectionFullCard/DirectionFullCard"

type DirectionCardProps = {
	className?: string
	typeCard?: "full" | "compact"
	data?: directionsGeneralDataType
}
export const DirectionCard = TypedMemo((props: DirectionCardProps) => {
	const { className, data, typeCard = "full" } = props

	if (typeCard === "full") {
		return (
			<DirectionFullCard
				className={className}
				data={data}
			/>
		)
	}

	return <></>
})
