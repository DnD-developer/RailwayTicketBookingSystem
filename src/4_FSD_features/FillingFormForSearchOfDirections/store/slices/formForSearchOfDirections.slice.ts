import { SEARCH_FORM } from "@constants/localStorage.constant"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { formForSearchOfDirectionsStateMap } from "../storeTypes/formForSearchOfDirectionsState.map"

const initialState: formForSearchOfDirectionsStateMap = {
	isValidForm: false,
	data: undefined
}

// To Feature сделать сохранение формы в params страницы

const formForSearchOfDirectionsSlice = buildSlice({
	name: "formForSearchOfDirections",
	initialState,
	reducers: {
		setParametres: (
			state,
			action: PayloadAction<formForSearchOfDirectionsStateMap["data"]>
		) => {
			const parametres = action.payload

			let data: formForSearchOfDirectionsStateMap["data"] = { ...state.data, ...parametres }

			data = Object.fromEntries(
				Object.entries(data).filter(([_, value]) => Boolean(value) || value === 0)
			)

			state.data = { ...data }

			state.isValidForm = Boolean(state?.data?.fromCity) && Boolean(state?.data?.toCity)

			localStorage.setItem(SEARCH_FORM, JSON.stringify(state.data))
		},
		clearParametres: state => {
			state.data = undefined
			state.isValidForm = false

			localStorage.removeItem(SEARCH_FORM)
		},

		changeDirection: state => {
			if (state.data) {
				const staged = state.data?.toCity

				state.data.toCity = state.data?.fromCity

				state.data.fromCity = staged

				localStorage.setItem(SEARCH_FORM, JSON.stringify(state.data))
			}
		}
	}
})

export const {
	actions: formForSearchDirectionsActions,
	reducer: formForSearchDirectionsReducer,
	useActions: useFormForSearchDirectionsActions
} = formForSearchOfDirectionsSlice
