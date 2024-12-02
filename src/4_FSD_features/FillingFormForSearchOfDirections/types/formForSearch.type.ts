import type { cityDataType } from "@entities/City"

export type citiesDataForServerType = {
	from_city_id?: cityDataType["_id"]
	to_city_id?: cityDataType["_id"]
}

export type citiesDataTypeForFormType = {
	fromCity?: cityDataType
	toCity?: cityDataType
}
