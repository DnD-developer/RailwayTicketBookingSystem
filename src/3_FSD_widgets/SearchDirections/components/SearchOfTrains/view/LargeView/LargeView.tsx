import { DateInput } from "@features/DateInput"
import { LocationInput } from "@features/LocationInput"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { memo } from "react"
import type { SearchOfTrainsViewsProps } from "../../SearchDirections"
import { ChangeButton } from "../../ui/ChangeButton/ChangeButton"
import styles from "./LargeView.module.scss"

export const LargeView = memo<SearchOfTrainsViewsProps>(props => {
	const {
		className,
		onSaveDepartureDate,
		onSaveArrivalDate,
		onSaveFromLocation,
		onSaveToLocation,
		onSearch,
		onChangeDirection,
		parametres
	} = props

	const dateFrom = parametres?.date_start ? new Date(parametres?.date_start) : undefined
	const dateTo = parametres?.date_end ? new Date(parametres?.date_end) : undefined

	return (
		<VStack
			className={classNamesHelp(styles.LargeView, {}, [className])}
			gap={"gapL"}
			align={"flexEnd"}
		>
			<HStack gap={"gapS"}>
				<VStack gap={"gapS"}>
					<Text
						title={"Направление"}
						TitleType={"h3"}
						fontSizeTitle={"l"}
						fontWeightTitle={"think"}
						colorTitle={"main-light"}
					/>
					<HStack
						gap={"gapXS"}
						align={"center"}
					>
						<LocationInput
							onSaveToForm={onSaveFromLocation}
							placeholder={"Откуда"}
							value={parametres?.fromCity?.name}
						/>
						<ChangeButton onClick={onChangeDirection} />
						<LocationInput
							onSaveToForm={onSaveToLocation}
							placeholder={"Куда"}
							value={parametres?.toCity?.name}
						/>
					</HStack>
				</VStack>
				<VStack gap={"gapS"}>
					<Text
						title={"Дата"}
						TitleType={"h3"}
						fontSizeTitle={"l"}
						fontWeightTitle={"think"}
						colorTitle={"main-light"}
					/>
					<HStack
						gap={"gapXS"}
						align={"center"}
						justify={"spaceBetween"}
					>
						<DateInput
							onSaveToForm={onSaveArrivalDate}
							value={dateFrom}
						/>
						<DateInput
							onSaveToForm={onSaveDepartureDate}
							value={dateTo}
						/>
					</HStack>
				</VStack>
			</HStack>

			<Button
				type={"submit"}
				theme={"defaultDark"}
				width={"m"}
				height={"m"}
				textUppercase={true}
				onClick={onSearch}
			>
				{"Найти Билеты"}
			</Button>
		</VStack>
	)
})
