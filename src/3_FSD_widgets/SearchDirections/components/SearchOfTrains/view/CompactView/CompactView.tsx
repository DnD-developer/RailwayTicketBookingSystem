import { DateInput } from "@features/DateInput"
import { LocationInput } from "@features/LocationInput"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { memo, useMemo } from "react"
import type { SearchOfTrainsViewsProps } from "../../SearchDirections"
import { ChangeButton } from "../../ui/ChangeButton/ChangeButton"
import styles from "./CompactView.module.scss"

export const CompactView = memo<SearchOfTrainsViewsProps>(props => {
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

	const dateFrom = useMemo(
		() => (parametres?.date_start ? new Date(parametres?.date_start) : undefined),
		[parametres?.date_start]
	)
	const dateTo = useMemo(
		() => (parametres?.date_end ? new Date(parametres?.date_end) : undefined),
		[parametres?.date_end]
	)

	return (
		<VStack
			className={classNamesHelp(styles.CompactView, {}, [className])}
			gap={"gapXL"}
		>
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
					justify={"spaceBetween"}
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
						value={dateFrom}
						onSaveToForm={onSaveArrivalDate}
					/>
					<DateInput
						value={dateTo}
						onSaveToForm={onSaveDepartureDate}
					/>
				</HStack>
			</VStack>
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
