import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import {
	getDirectionsListDataSelector,
	getDirectionsListErrorSelector,
	getDirectionsListIsInitSelector,
	getDirectionsListIsLoadingSelector,
	getDirectionsListItemSelector,
	getDirectionsListTotalCountSelector
} from "./getDirectionsListProperties.selector"

describe("getDirectionsListIsInitSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				_inited: true
			}
		}
		expect(getDirectionsListIsInitSelector()(state as mainStateMap)).toBe(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListIsInitSelector()(state as mainStateMap)).toBe(false)
	})
})

describe("getDirectionsListIsLoadingSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				isLoading: true
			}
		}
		expect(getDirectionsListIsLoadingSelector()(state as mainStateMap)).toEqual(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListIsLoadingSelector()(state as mainStateMap)).toEqual(false)
	})
})

describe("getDirectionsListErrorSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				error: "error"
			}
		}
		expect(getDirectionsListErrorSelector()(state as mainStateMap)).toEqual("error")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListErrorSelector()(state as mainStateMap)).toEqual(undefined)
	})
})

describe("getDirectionsListDataSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				ids: ["1"],
				entities: { "1": { id: "1" } }
			}
		}
		expect(getDirectionsListDataSelector(state as mainStateMap)).toEqual([{ id: "1" }])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListDataSelector(state as mainStateMap)).toEqual([])
	})
})

describe("getDirectionsListItemSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				ids: ["1"],
				entities: { "1": { id: "1" } }
			}
		}
		expect(getDirectionsListItemSelector(state as mainStateMap, "1")).toEqual({ id: "1" })
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListItemSelector(state as mainStateMap, "1")).toEqual(undefined)
	})
})

describe("getDirectionsListTotalCountSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				totalCount: 5
			}
		}

		expect(getDirectionsListTotalCountSelector()(state as mainStateMap)).toEqual(5)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListTotalCountSelector()(state as mainStateMap)).toEqual(0)
	})
})
