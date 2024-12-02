import { LocationIcon } from "@assets/index"
import type { cityDataType } from "@entities/City"
import { useGetCitiesByPatternQuery } from "@entities/City"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useClickOutside } from "@hooks/useClickOutside.hook"
import { useDebounce } from "@hooks/useDebounce.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Input } from "@ui/Input"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { LocationList } from "../LocationList/LocationList"
import styles from "./LocationInput.module.scss"
import { Loader } from "./ui/Loader"

type LocationInputProps = {
	className?: string
	value?: string
	onSaveToForm: (city?: cityDataType) => void
	placeholder?: string
	testIsFetching?: boolean
}
export const LocationInput = TypedMemo((props: LocationInputProps) => {
	const { className, value = "", onSaveToForm, placeholder, testIsFetching = false } = props

	const inputLocationRef = useRef<HTMLDivElement>(null)

	const [currentValue, setCurrentValue] = useState(value.toUpperCase())

	const [searchValue, setSearchValue] = useState("")

	const [cities, setCities] = useState<cityDataType[]>([])
	const [skipRequest, setSkipRequest] = useState(true)

	const saveToFormHelper = useCallback(
		(city: cityDataType) => {
			onSaveToForm(city)
			setCities([])
		},
		[onSaveToForm]
	)

	const resetFormHelper = useCallback(() => {
		onSaveToForm(undefined)
	}, [onSaveToForm])

	const autoSave = useCallback(() => {
		if (currentValue) {
			const chosenCity = cities.filter(city => city.name === currentValue.toLowerCase())

			if (chosenCity.length === 1) {
				saveToFormHelper(chosenCity[0])
			}
		}
	}, [currentValue, cities, saveToFormHelper])

	const onAutoSaveDebounce = useDebounce(autoSave, 300)

	const onSearchCities = useCallback((value: string) => {
		if (value) {
			setSkipRequest(false)
			setSearchValue(value)
		} else {
			setCities([])
		}
	}, [])

	const onSearchCitiesDebounce = useDebounce(onSearchCities, 400)

	const onResetToLastChoice = useCallback(() => {
		setCities([])
		setCurrentValue(value.toUpperCase())
	}, [value])

	const onChangeHandler = useCallback(
		(value: string) => {
			setCurrentValue(value)

			onSearchCitiesDebounce(value)

			if (!value) {
				resetFormHelper()
			}
		},
		[onSearchCitiesDebounce, resetFormHelper]
	)

	const onSaveToFormHandler = useCallback(
		(city: cityDataType) => {
			saveToFormHelper(city)
		},
		[saveToFormHelper]
	)

	const { data, isFetching } = useGetCitiesByPatternQuery(
		searchValue,
		useMemo(() => ({ skip: skipRequest }), [skipRequest])
	)

	useEffect(() => {
		if (data) {
			setCities(data)
		}
	}, [data])

	useEffect(() => {
		setCurrentValue(value.toUpperCase())
	}, [value])

	useEffect(() => {
		onAutoSaveDebounce()
		//eslint-disable-next-line
	}, [cities])

	useClickOutside(inputLocationRef, onResetToLastChoice)

	return (
		<div
			className={classNamesHelp(styles.LocationInput, {}, [className])}
			ref={inputLocationRef}
		>
			<Input
				placeholder={placeholder}
				onChange={onChangeHandler}
				fontSize={"s"}
				fontWeight={"medium"}
				height={"m"}
				value={currentValue}
				Icon={LocationIcon}
				disabled={testIsFetching}
			/>

			{(isFetching || testIsFetching) && <Loader />}
			<LocationList
				className={styles.list}
				cities={cities}
				onClick={onSaveToFormHandler}
			/>
		</div>
	)
})
