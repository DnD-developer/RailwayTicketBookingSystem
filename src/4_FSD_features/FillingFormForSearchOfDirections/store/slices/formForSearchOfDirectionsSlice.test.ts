import { describe, expect, test } from "@jest/globals"
import type { formForSearchOfDirectionsStateMap } from "../storeTypes/formForSearchOfDirectionsState.map"
import {
	formForSearchDirectionsActions,
	formForSearchDirectionsReducer
} from "./formForSearchOfDirections.slice"

describe("formForSearchOfDirectionsSliceTest", () => {
	test("setParametres", () => {
		const state: formForSearchOfDirectionsStateMap = {
			isValidForm: false,
			data: {
				toCity: {
					id: "1",
					name: "testCity"
				},
				fromCity: {
					id: "1",
					name: "testCity2"
				}
			}
		}

		const newState = formForSearchDirectionsReducer(
			state,
			formForSearchDirectionsActions.setParametres({ date_start: "2024-12-30" })
		)

		expect(newState).toEqual({
			isValidForm: true,
			data: {
				toCity: {
					id: "1",
					name: "testCity"
				},
				fromCity: {
					id: "1",
					name: "testCity2"
				},
				date_start: "2024-12-30"
			}
		})
	})

	test("clearParametres", () => {
		const state: formForSearchOfDirectionsStateMap = {
			isValidForm: false,
			data: {
				toCity: {
					id: "1",
					name: "testCity"
				},
				fromCity: {
					id: "1",
					name: "testCity2"
				}
			}
		}

		const newState = formForSearchDirectionsReducer(
			state,
			formForSearchDirectionsActions.clearParametres()
		)

		expect(newState).toEqual({
			isValidForm: false,
			data: undefined
		})
	})

	test("changeDirection", () => {
		const state: formForSearchOfDirectionsStateMap = {
			isValidForm: false,
			data: {
				toCity: {
					id: "1",
					name: "testCity"
				},
				fromCity: {
					id: "2",
					name: "testCity2"
				}
			}
		}

		const newState = formForSearchDirectionsReducer(
			state,
			formForSearchDirectionsActions.changeDirection()
		)

		expect(newState).toEqual({
			isValidForm: false,
			data: {
				toCity: {
					id: "2",
					name: "testCity2"
				},
				fromCity: {
					id: "1",
					name: "testCity"
				}
			}
		})
	})
})