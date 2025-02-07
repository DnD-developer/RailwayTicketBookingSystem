import type { carriageDataType } from "@entities/Carriage"
import type { directionGeneralDataType } from "@entities/Direction"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { currentDirectionMapState } from "../storeTypes/currentDirectionMapState.map"

const initialState: currentDirectionMapState = {
	directionInfo: undefined,
	carriageInfo: undefined,
	seatsInfo: 1,
	sum: 0
}

const currentDirectionSlice = buildSlice({
	name: "currentDirection",
	initialState,
	reducers: {
		setCurrentDirection: (state, action: PayloadAction<directionGeneralDataType>) => {
			state.directionInfo = action.payload?.departure
		},
		setCurrentCarriage: (state, action: PayloadAction<carriageDataType>) => {
			state.carriageInfo = action.payload
		},
		setChosenSeatsInfo: (state, action: PayloadAction<number>) => {
			state.seatsInfo = action.payload
		},
		calculateSum: state => {
			let sum = 0

			if (state.carriageInfo) {
				if (state.seatsInfo && state.carriageInfo.top_price) {
					sum = state.carriageInfo.top_price * state.seatsInfo
				}

				if (state.carriageInfo.have_wifi) {
					sum += state.carriageInfo.wifi_price || 0
				}

				if (state.carriageInfo.is_linens_included) {
					sum += state.carriageInfo.linens_price || 0
				}
			}

			state.sum = sum
		}
	}
})

export const {
	actions: currentDirectionActions,
	reducer: currentDirectionReducer,
	useActions: useCurrentDirectionActions
} = currentDirectionSlice

// To Hold написать тест
