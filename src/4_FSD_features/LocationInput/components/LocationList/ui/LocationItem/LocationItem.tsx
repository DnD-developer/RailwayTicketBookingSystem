import type { cityDataType } from "@entities/City"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button } from "@ui/Button"
import { Text } from "@ui/Text"
import { memo, useCallback } from "react"
import styles from "./LocationItem.module.scss"

type LocationItemProps = {
	className?: string
	cityData: cityDataType
	onClick?: (cityData: cityDataType) => void
}
export const LocationItem = memo<LocationItemProps>(props => {
	const { className, cityData, onClick } = props

	const onClickHandler = useCallback(() => {
		onClick?.(cityData)
	}, [cityData, onClick])

	return (
		<Button
			theme={"clear"}
			onClick={onClickHandler}
			className={classNamesHelp(styles.LocationItem, {}, [className])}
		>
			<Text
				text={cityData.name}
				textTransform={"uppercase"}
				fontSizeText={"xs"}
				colorText={"main-dark"}
				fontWeightText={"medium"}
			/>
		</Button>
	)
})
