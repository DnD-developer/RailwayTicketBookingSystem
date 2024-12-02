import { describe, expect, test } from "@jest/globals"
import { getMinPriceForSeat } from "./getMinPriceForSeat.helper"

describe("getMinPriceForSeatHelperTest", () => {
	test("with linens_price and wifi_price", () => {
		expect(
			getMinPriceForSeat({ price: 1000, linens_price: 100, wifi_price: 50, side_price: 150 })
		).toBe(150)
	})

	test("also linens_price and wifi_price", () => {
		expect(getMinPriceForSeat({ linens_price: 100, wifi_price: 50 })).toBe(0)
	})

	test("with out linens_price and wifi_price", () => {
		expect(getMinPriceForSeat({ price: 1000, side_price: 1500 })).toBe(1000)
	})
})
