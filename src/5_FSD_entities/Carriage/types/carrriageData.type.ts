import type { seatDataType } from "./seatData.type"

export type carriagePriceType = {
	price?: number
	top_price?: number
	bottom_price?: number
	side_price?: number
	linens_price?: number
	wifi_price?: number
}

export type carriageClassType = "first" | "second" | "third" | "fourth"

export type carriageDataType = {
	_id: string
	name: string
	class_type: carriageClassType
	have_wifi: boolean
	have_air_conditioning: boolean
	available_seats: number
	is_linens_included: boolean
	seats: seatDataType[]
} & carriagePriceType
