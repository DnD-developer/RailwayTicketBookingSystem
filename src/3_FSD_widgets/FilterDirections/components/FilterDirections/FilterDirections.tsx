import { useGetDirectionsListIsLoadingSelector } from "@entities/Direction"
import {
	useFormForSearchDirectionsActions,
	useGetFormForSearchOfDirectionsDataSelector,
	useGetFormForSearchOfDirectionsIsValidFormSelector
} from "@features/FillingFormForSearchOfDirections"
import { RangeTimeDirections } from "@features/RangeTimeDirections"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { convertHourToSeconds } from "@helpers/convertHourToSeconds/convertHourToSeconds.helper"
import { convertSecondsToHour } from "@helpers/convertSecondsToHour/convertSecondsToHour.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback, useMemo } from "react"
import { DateInputs } from "../DateInputs/DateInputs"
import { RangeCost } from "../RangeCost/RangeCost"
import { TogglesParametres } from "../TogglesParametres/TogglesParametres"
import styles from "./FilterDirections.module.scss"
import { SubmitButton } from "./ui/SubmitButton/SubmitButton"

// To Feature сделать заполнение диапазона стоимости билетов

type FilterDirectionsProps = {
	className?: string
	onSearch?: () => void
}
export const FilterDirections = TypedMemo((props: FilterDirectionsProps) => {
	const { className, onSearch } = props

	const { setParametres } = useFormForSearchDirectionsActions()
	const formParametres = useGetFormForSearchOfDirectionsDataSelector()
	const isLoading = useGetDirectionsListIsLoadingSelector()
	const isValidForm = useGetFormForSearchOfDirectionsIsValidFormSelector()

	const onSaveArrivalDateHandler = useCallback(
		(value: string) => {
			setParametres({ date_start_arrival: value })
		},
		[setParametres]
	)

	const onSaveDepartureDateHandler = useCallback(
		(value: string) => {
			setParametres({ date_end_arrival: value })
		},
		[setParametres]
	)

	const onToggleCupeHandler = useCallback(
		(value: boolean) => setParametres({ have_second_class: value }),
		[setParametres]
	)

	const onTogglePlackartHandler = useCallback(
		(value: boolean) => setParametres({ have_third_class: value }),
		[setParametres]
	)

	const onToggleSitPlaceHandler = useCallback(
		(value: boolean) => setParametres({ have_fourth_class: value }),
		[setParametres]
	)

	const onToggleLuxHandler = useCallback(
		(value: boolean) => setParametres({ have_first_class: value }),
		[setParametres]
	)

	const onToggleWifiHandler = useCallback(
		(value: boolean) => setParametres({ have_wifi: value }),
		[setParametres]
	)

	const onToggleExpressHandler = useCallback(
		(value: boolean) => setParametres({ have_express: value }),
		[setParametres]
	)

	const onChangeRangeCostHandler = useCallback(
		(value: number[]) => {
			setParametres({ price_from: value[0], price_to: value[1] })
		},
		[setParametres]
	)

	const onChangeRangeArrivalTimeToHandler = useCallback(
		(value: number[]) => {
			setParametres({
				start_departure_hour_from: convertSecondsToHour(value[0]),
				start_departure_hour_to: convertSecondsToHour(value[1])
			})
		},
		[setParametres]
	)
	const onChangeRangeDepartureTimeToHandler = useCallback(
		(value: number[]) => {
			setParametres({
				start_arrival_hour_from: convertSecondsToHour(value[0]),
				start_arrival_hour_to: convertSecondsToHour(value[1])
			})
		},
		[setParametres]
	)

	const onChangeRangeArrivalTimeFromHandler = useCallback(
		(value: number[]) => {
			setParametres({
				end_departure_hour_from: convertSecondsToHour(value[0]),
				end_departure_hour_to: convertSecondsToHour(value[1])
			})
		},
		[setParametres]
	)
	const onChangeRangeDepartureTimeFromHandler = useCallback(
		(value: number[]) => {
			setParametres({
				end_arrival_hour_from: convertSecondsToHour(value[0]),
				end_arrival_hour_to: convertSecondsToHour(value[1])
			})
		},
		[setParametres]
	)

	const onSubmitHandler = useCallback(() => {
		if (formParametres && isValidForm) {
			onSearch?.()
		} else {
			//eslint-disable-next-line
			console.log("не заполнена форма") // To Hold обработать ошибку заполнения формы
		}
	}, [formParametres, isValidForm, onSearch])

	const rangeCost = useMemo(() => {
		if (formParametres?.price_from !== undefined && formParametres?.price_to !== undefined) {
			return [formParametres?.price_from, formParametres?.price_to]
		}
		return undefined
	}, [formParametres?.price_from, formParametres?.price_to])

	const rangeArrivalTimeTo = useMemo(() => {
		if (
			formParametres?.start_departure_hour_from !== undefined &&
			formParametres?.start_departure_hour_to !== undefined
		) {
			return [
				convertHourToSeconds(formParametres?.start_departure_hour_from),
				convertHourToSeconds(formParametres?.start_departure_hour_to)
			]
		}
		return undefined
	}, [formParametres?.start_departure_hour_from, formParametres?.start_departure_hour_to])

	const rangeDepartureTimeTo = useMemo(() => {
		if (
			formParametres?.start_arrival_hour_from !== undefined &&
			formParametres?.start_arrival_hour_to !== undefined
		) {
			return [
				convertHourToSeconds(formParametres?.start_arrival_hour_from),
				convertHourToSeconds(formParametres?.start_arrival_hour_to)
			]
		}
		return undefined
	}, [formParametres?.start_arrival_hour_from, formParametres?.start_arrival_hour_to])

	const rangeArrivalTimeFrom = useMemo(() => {
		if (
			formParametres?.end_departure_hour_from !== undefined &&
			formParametres?.end_departure_hour_to !== undefined
		) {
			return [
				convertHourToSeconds(formParametres?.end_departure_hour_from),
				convertHourToSeconds(formParametres?.end_departure_hour_to)
			]
		}
		return undefined
	}, [formParametres?.end_departure_hour_from, formParametres?.end_departure_hour_to])

	const rangeDepartureTimeFrom = useMemo(() => {
		if (
			formParametres?.end_arrival_hour_from !== undefined &&
			formParametres?.end_arrival_hour_to !== undefined
		) {
			return [
				convertHourToSeconds(formParametres?.end_arrival_hour_from),
				convertHourToSeconds(formParametres?.end_arrival_hour_to)
			]
		}
		return undefined
	}, [formParametres?.end_arrival_hour_from, formParametres?.end_arrival_hour_to])

	return (
		<aside className={classNamesHelp(styles.FilterDirections, {}, [className])}>
			<DateInputs
				onSaveDepartureDate={onSaveDepartureDateHandler}
				onSaveArrivalDate={onSaveArrivalDateHandler}
				departureDate={formParametres?.date_end_arrival}
				arrivalDate={formParametres?.date_start_arrival}
			/>
			<TogglesParametres
				isToggleCupe={formParametres?.have_second_class}
				isTogglePlackart={formParametres?.have_third_class}
				isToggleLux={formParametres?.have_first_class}
				isToggleWifi={formParametres?.have_wifi}
				isToggleSitPlace={formParametres?.have_fourth_class}
				isToggleExpress={formParametres?.have_express}
				onToggleCupe={onToggleCupeHandler}
				onTogglePlackart={onTogglePlackartHandler}
				onToggleSitPlace={onToggleSitPlaceHandler}
				onToggleLux={onToggleLuxHandler}
				onToggleWifi={onToggleWifiHandler}
				onToggleExpress={onToggleExpressHandler}
			/>
			<RangeCost
				range={rangeCost}
				onChange={onChangeRangeCostHandler}
			/>
			<RangeTimeDirections
				direction={"arrival"}
				arrivalRange={rangeArrivalTimeTo}
				departureRange={rangeDepartureTimeTo}
				onChangeArrivalRange={onChangeRangeArrivalTimeToHandler}
				onChangeDepartureRange={onChangeRangeDepartureTimeToHandler}
			/>
			<RangeTimeDirections
				direction={"departure"}
				arrivalRange={rangeArrivalTimeFrom}
				departureRange={rangeDepartureTimeFrom}
				onChangeArrivalRange={onChangeRangeArrivalTimeFromHandler}
				onChangeDepartureRange={onChangeRangeDepartureTimeFromHandler}
			/>
			<SubmitButton
				onSubmit={onSubmitHandler}
				isDisabled={isLoading}
			/>
		</aside>
	)
})
