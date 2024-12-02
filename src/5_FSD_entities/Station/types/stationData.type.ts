import type { cityDataType } from "../../City"

export type stationDataType = {
	railway_station_name: string
	city: cityDataType
	datetime: number
}
