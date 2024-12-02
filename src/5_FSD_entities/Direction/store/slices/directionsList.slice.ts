import { DIRECTIONS } from "@constants/localStorage.constant"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import { createEntityAdapter } from "@reduxjs/toolkit"
import type { directionsGeneralDataType } from "../../types/directionData.type"
import type { directionsListStateMap } from "../storeTypes/directionsListState.map"
import { fetchDirectionsThunk } from "../thunks/fetchDirections/fetchDirections.thunk"

const initialState: directionsListStateMap = {
	isLoading: false,
	error: undefined,
	_inited: false,
	ids: [],
	entities: {}
}

export const directionsListAdapter = createEntityAdapter<directionsGeneralDataType>()

const directionsListSlice = buildSlice({
	name: "directionsList",
	initialState: directionsListAdapter.getInitialState<directionsListStateMap>(initialState),
	reducers: {
		directionsListInit: state => {
			const storage = localStorage.getItem(DIRECTIONS)

			if (!state._inited) {
				state._inited = true

				if (storage) {
					directionsListAdapter.setAll(state, JSON.parse(storage))
				}
			}
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchDirectionsThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
				directionsListAdapter.removeAll(state)
			})
			.addCase(fetchDirectionsThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = undefined

				directionsListAdapter.setAll(state, action.payload)

				localStorage.setItem(
					DIRECTIONS,
					JSON.stringify(directionsListAdapter.getSelectors().selectAll(state))
				)
			})
			.addCase(fetchDirectionsThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload

				directionsListAdapter.removeAll(state)

				localStorage.removeItem(DIRECTIONS)
			})
	}
})

export const {
	actions: directionsListSliceActions,
	reducer: directionsListSliceReducers,
	useActions: useDirectionsListSliceUseActions
} = directionsListSlice
