import type { cityDataType } from "@entities/City"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { memo } from "react"
import styles from "./LocationList.module.scss"
import { LocationItem } from "./ui/LocationItem/LocationItem"

type LocationListProps = {
	className?: string
	onClick?: (cityData: cityDataType) => void
	cities?: cityDataType[]
}
export const LocationList = memo<LocationListProps>(props => {
	const { className, cities, onClick } = props

	if (!cities?.length) {
		return null
	}

	return (
		<VStack
			TagType={"ul"}
			gap={"gapM"}
			className={classNamesHelp(styles.LocationList, {}, [className])}
		>
			{cities.map(city => (
				<li key={city._id}>
					<LocationItem
						cityData={city}
						onClick={onClick}
					/>
				</li>
			))}
		</VStack>
	)
})
