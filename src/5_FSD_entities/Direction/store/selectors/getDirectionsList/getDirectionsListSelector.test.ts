import { describe, expect, test } from "@jest/globals"
import { getDirectionsListSelector } from "./getDirectionsList.selector"
import type { DeepPartial } from "@customTypes/global.types"
import type { mainStateMap } from "@store/storeTypes/mainState.map"

describe("getDirectionListSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				isLoading: true,
				error: "",
				ids: ["1"],
				entities: { "1": { id: "1" } }
			}
		}
		expect(getDirectionsListSelector(state as mainStateMap)).toEqual({
			isLoading: true,
			error: "",
			ids: ["1"],
			entities: { "1": { id: "1" } }
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListSelector(state as mainStateMap)).toEqual(undefined)
	})
})
