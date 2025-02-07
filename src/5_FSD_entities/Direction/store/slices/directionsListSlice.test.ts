import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, jest, test } from "@jest/globals"
import type { directionGeneralDataFromServerType } from "../../types/directionData.type"
import type { directionsListStateMap } from "../storeTypes/directionsListState.map"
import { fetchDirectionsThunk } from "../thunks/fetchDirections/fetchDirections.thunk"
import { directionsListReducers } from "./directionsList.slice"

jest.mock("uid", () => ({
	uid: jest.fn().mockReturnValue("testID")
}))

describe("directionsListSliceTest", () => {
	test("pending", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: false,
			error: ""
		}

		const newState = directionsListReducers(
			state as directionsListStateMap,
			fetchDirectionsThunk.pending("", { from_city_id: "1", to_city_id: "2" })
		)

		expect(newState).toEqual({
			isLoading: true,
			error: undefined,
			ids: [],
			entities: {},
			totalCount: 0
		})
	})

	test("fulfilled", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: true,
			error: "error",
			ids: [],
			entities: {}
		}

		const newState = directionsListReducers(
			state as directionsListStateMap,
			fetchDirectionsThunk.fulfilled(
				{
					total_count: 156,
					items: [
						{ from_city_id: "1" }
					] as unknown as directionGeneralDataFromServerType[]
				},
				"",
				{
					from_city_id: "1",
					to_city_id: "2"
				}
			)
		)

		expect(newState).toEqual({
			isLoading: false,
			error: undefined,
			totalCount: 156,
			ids: ["testID"],
			entities: { testID: { from_city_id: "1", id: "testID" } }
		})
	})

	test("rejected", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: true,
			error: undefined
		}

		const newState = directionsListReducers(
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
			error: "error with request",
			ids: [],
			entities: {},
			totalCount: 0
		})
	})
})
