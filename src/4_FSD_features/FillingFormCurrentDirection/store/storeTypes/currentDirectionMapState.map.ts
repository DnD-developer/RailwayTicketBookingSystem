import type { carriageDataType } from "@entities/Carriage"
import type { directionDataType } from "@entities/Direction/types/directionData.type"

export type currentDirectionMapState = {
	directionInfo?: directionDataType
	carriageInfo?: carriageDataType
	seatsInfo: number
	sum: number
}
