import type { DeepPartial } from "@customTypes/global.types"
import type { carriageClassType, carriagePriceType } from "../../Carriage"
import type { stationDataType } from "../../Station"
import type { trainDataType } from "../../Train"

export type directionDataType = {
	_id: string
	have_first_class: boolean
	have_second_class: boolean
	have_third_class: boolean
	have_fourth_class: boolean
	have_wifi: boolean
	have_air_conditioning: boolean
	duration: number
	is_express: boolean
	min_price: number
	from: stationDataType
	to: stationDataType
	available_seats: number
	available_seats_info: DeepPartial<Record<carriageClassType, number>>
	train: trainDataType
	price_info: DeepPartial<Record<carriageClassType, carriagePriceType>>
}

export type directionsGeneralDataFromServerType = {
	have_first_class: boolean
	have_second_class: boolean
	have_third_class: boolean
	have_fourth_class: boolean
	have_wifi: boolean
	have_air_conditioning: boolean
	is_express: boolean
	min_price: number
	available_seats: number
	available_seats_info: DeepPartial<Record<carriageClassType, number>>
	arrival?: directionDataType
	departure: directionDataType
}

export type directionsGeneralDataType = {
	id: string
} & directionsGeneralDataFromServerType
