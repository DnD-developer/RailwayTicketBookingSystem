import type { EntityState } from "@reduxjs/toolkit"
import type { directionsGeneralDataType } from "../../types/directionData.type"

export type directionsListStateMap = {
	isLoading: boolean
	error?: string
	_inited?: boolean
} & EntityState<directionsGeneralDataType, directionsGeneralDataType["id"]>
