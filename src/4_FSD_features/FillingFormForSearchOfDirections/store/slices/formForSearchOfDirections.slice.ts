import { SHOW_LIMITS } from "@constants/common.constant"
import type { directionDisplayParametres } from "@entities/Direction"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import type {
	formDataType,
	formForSearchOfDirectionsStateMap
} from "../storeTypes/formForSearchOfDirectionsState.map"

const initialState: formForSearchOfDirectionsStateMap = {
	isValidForm: false,
	data: undefined,
	displayData: {
		limit: SHOW_LIMITS[0],
		offset: 1
	}
}

const formForSearchOfDirectionsSlice = buildSlice({
	name: "formForSearchOfDirections",
	initialState,
	reducers: {
		setParametres: (state, action: PayloadAction<formDataType>) => {
			const parametres = action.payload

			let data: formDataType = { ...state.data, ...parametres }

			data = Object.fromEntries(
				Object.entries(data).filter(([_, value]) => Boolean(value) || value === 0)
			)

			state.data = { ...data }

			state.isValidForm = Boolean(state?.data?.fromCity) && Boolean(state?.data?.toCity)
		},
		setDisplayParametres: (state, action: PayloadAction<directionDisplayParametres>) => {
			const displayParametres = action.payload

			state.displayData = { ...state.displayData, ...displayParametres }
		},
		clearParametres: state => {
			state.data = undefined
			state.isValidForm = false
			state.displayData = {
				limit: SHOW_LIMITS[0],
				offset: 1
			}
		},

		changeDirection: state => {
			if (state.data) {
				const staged = state.data?.toCity

				state.data.toCity = state.data?.fromCity

				state.data.fromCity = staged
			}
		}
	}
})

export const {
	actions: formForSearchDirectionsActions,
	reducer: formForSearchDirectionsReducer,
	useActions: useFormForSearchDirectionsActions
} = formForSearchOfDirectionsSlice
