import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getFormForSearchOfDirectionsSelector } from "./getFormForSearchOfDirections.selector"

describe("getFormForSearchOfDirectionsSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			formForSearchOfDirectionsStateMap: {
				isValidForm: true,
				data: {
					fromCity: {
						name: "Москва"
					}
				}
			}
		}
		expect(getFormForSearchOfDirectionsSelector(state as mainStateMap)).toEqual({
			isValidForm: true,
			data: {
				fromCity: {
					name: "Москва"
				}
			}
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFormForSearchOfDirectionsSelector(state as mainStateMap)).toEqual(undefined)
	})
})
