import type { cityDataType } from "@entities/City"
import type { formForSearchOfDirectionsStateMap } from "@features/FillingFormForSearchOfDirections"
import {
	useFormForSearchDirectionsActions,
	useGetFormForSearchOfDirectionsDataSelector,
	useGetFormForSearchOfDirectionsIsValidFormSelector
} from "@features/FillingFormForSearchOfDirections"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback } from "react"
import { CompactView } from "./view/CompactView/CompactView"
import { LargeView } from "./view/LargeView/LargeView"

type SearchOfTrainsProps = {
	className?: string
	view?: "compact" | "large"
	onSearch: () => void
}

export type SearchOfTrainsViewsProps = {
	className?: string
	onSaveFromLocation: (city?: cityDataType) => void
	onSaveToLocation: (city?: cityDataType) => void
	onSaveArrivalDate: (value: string) => void
	onSaveDepartureDate: (value: string) => void
	onSearch: () => void
	onChangeDirection: () => void
	parametres?: formForSearchOfDirectionsStateMap["data"]
}

export const SearchDirections = TypedMemo((props: SearchOfTrainsProps) => {
	const { className, view = "compact", onSearch } = props

	const { setParametres, changeDirection } = useFormForSearchDirectionsActions()
	const formParametres = useGetFormForSearchOfDirectionsDataSelector()
	const isValidForm = useGetFormForSearchOfDirectionsIsValidFormSelector()

	const onSaveFromLocationHandler = useCallback(
		(value?: cityDataType) => {
			setParametres({ fromCity: value })
		},
		[setParametres]
	)

	const onSaveToLocationHandler = useCallback(
		(value?: cityDataType) => {
			setParametres({ toCity: value })
		},
		[setParametres]
	)
	const onSaveArrivalDateHandler = useCallback(
		(value: string) => {
			setParametres({ date_start: value })
		},
		[setParametres]
	)

	const onSaveDepartureDateHandler = useCallback(
		(value: string) => {
			setParametres({ date_end: value })
		},
		[setParametres]
	)

	const onChangeDirectionHandler = useCallback(() => {
		changeDirection()
	}, [changeDirection])

	const onSearchHandler = useCallback(() => {
		if (isValidForm && formParametres) {
			onSearch()
		} else {
			//eslint-disable-next-line
			console.log("не заполнена форма") // To Hold обработать ошибку заполнения формы
		}
	}, [formParametres, isValidForm, onSearch])

	if (view === "compact") {
		return (
			<CompactView
				className={className}
				onSaveFromLocation={onSaveFromLocationHandler}
				onSaveToLocation={onSaveToLocationHandler}
				onSaveArrivalDate={onSaveArrivalDateHandler}
				onSaveDepartureDate={onSaveDepartureDateHandler}
				onSearch={onSearchHandler}
				parametres={formParametres}
				onChangeDirection={onChangeDirectionHandler}
			/>
		)
	}

	if (view === "large") {
		return (
			<LargeView
				className={className}
				onSaveFromLocation={onSaveFromLocationHandler}
				onSaveToLocation={onSaveToLocationHandler}
				onSaveArrivalDate={onSaveArrivalDateHandler}
				onSaveDepartureDate={onSaveDepartureDateHandler}
				onSearch={onSearchHandler}
				parametres={formParametres}
				onChangeDirection={onChangeDirectionHandler}
			/>
		)
	}
})
