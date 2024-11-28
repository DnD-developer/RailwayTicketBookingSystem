import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { directionsGeneralDataType } from "../../types/directionData.type"
import type { directionsListStateMap } from "../storeTypes/directionsListState.map"
import { fetchDirectionsThunk } from "../thunks/fetchDirections/fetchDirections.thunk"
import { directionsListSliceReducers } from "./directionsList.slice"

describe("directionsListSliceTest", () => {
	test("pending", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: false,
			error: ""
		}

		const newState = directionsListSliceReducers(
			state as directionsListStateMap,
			fetchDirectionsThunk.pending("", { from_city_id: "1", to_city_id: "2" })
		)

		expect(newState).toEqual({
			isLoading: true,
			error: undefined
		})
	})

	test("fulfilled", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: true,
			error: "error",
			ids: [],
			entities: {}
		}

		const newState = directionsListSliceReducers(
			state as directionsListStateMap,
			fetchDirectionsThunk.fulfilled([{ id: "1" }] as directionsGeneralDataType[], "", {
				from_city_id: "1",
				to_city_id: "2"
			})
		)

		expect(newState).toEqual({
			isLoading: false,
			error: undefined,
			ids: ["1"],
			entities: { "1": { id: "1" } }
		})
	})

	test("rejected", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: true,
			error: undefined
		}

		const newState = directionsListSliceReducers(
			state as directionsListStateMap,
			fetchDirectionsThunk.rejected(
				null,
				"",
				{ from_city_id: "1", to_city_id: "2" },
				"error with request"
			)
		)

		expect(newState).toEqual({
			isLoading: false,
			error: "error with request"
		})
	})
})