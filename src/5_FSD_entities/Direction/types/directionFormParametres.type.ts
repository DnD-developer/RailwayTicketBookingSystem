import type { sortType } from "@customTypes/common.types"
import type { cityDataType } from "../../City"

export type directionFormParametres = {
	from_city_id?: cityDataType["_id"]
	to_city_id?: cityDataType["_id"]
	date_start?: string
	date_end?: string
	date_start_arrival?: string
	date_end_arrival?: string
	have_first_class?: boolean
	have_second_class?: boolean
	have_third_class?: boolean
	have_fourth_class?: boolean
	have_wifi?: boolean
	have_air_conditioning?: boolean
	have_express?: boolean
	price_from?: number
	price_to?: number
	start_departure_hour_from?: number
	start_departure_hour_to?: number
	start_arrival_hour_from?: number
	start_arrival_hour_to?: number
	end_departure_hour_from?: number
	end_departure_hour_to?: number
	end_arrival_hour_from?: number
	end_arrival_hour_to?: number
}

export type directionsDisplayParametres = { limit?: number; offset?: number; sort?: sortType }
