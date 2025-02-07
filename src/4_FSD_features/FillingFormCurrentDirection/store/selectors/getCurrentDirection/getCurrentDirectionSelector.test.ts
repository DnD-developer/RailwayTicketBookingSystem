import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCurrentDirectionSelector } from "./getCurrentDirection.selector"

describe("", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			currentDirection: {
				directionInfo: { _id: "1" }
			}
		}
		expect(getCurrentDirectionSelector(state as mainStateMap)).toEqual({
			directionInfo: { _id: "1" }
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCurrentDirectionSelector(state as mainStateMap)).toEqual(undefined)
	})
})
