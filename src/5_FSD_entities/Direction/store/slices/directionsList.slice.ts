import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { uid } from "uid"
import type { directionGeneralDataType } from "../../types/directionData.type"
import type { directionsListStateMap } from "../storeTypes/directionsListState.map"
import { fetchDirectionsThunk } from "../thunks/fetchDirections/fetchDirections.thunk"

const initialState: directionsListStateMap = {
	isLoading: false,
	error: undefined,
	totalCount: 0,
	_inited: false,
	ids: [],
	entities: {}
}

export const directionsListAdapter = createEntityAdapter<directionGeneralDataType>()

const directionsListSlice = buildSlice({
	name: "directionsList",
	initialState: directionsListAdapter.getInitialState<directionsListStateMap>(initialState),
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchDirectionsThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
				state.totalCount = 0
				directionsListAdapter.removeAll(state)
			})
			.addCase(fetchDirectionsThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = undefined

				state.totalCount = action.payload.total_count

				const items = action.payload.items.map(item => ({ ...item, id: uid() }))

				directionsListAdapter.setAll(state, items)
			})
			.addCase(fetchDirectionsThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload

				state.totalCount = 0

				directionsListAdapter.removeAll(state)
			})
	}
})

export const {
	actions: directionsListActions,
	reducer: directionsListReducers,
	useActions: useDirectionsListUseActions
} = directionsListSlice
