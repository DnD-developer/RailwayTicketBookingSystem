import { describe, expect, test } from "@jest/globals"
import { mapperCarriageTypeName } from "./mapperCarriageTypeName.helper"

describe("mapperCarriageTypeNameHelperTest", () => {
	test("first", () => {
		expect(mapperCarriageTypeName("first")).toBe("Люкс")
	})

	test("second", () => {
		expect(mapperCarriageTypeName("second")).toBe("Купе")
	})

	test("third", () => {
		expect(mapperCarriageTypeName("third")).toBe("Плацкарт")
	})

	test("fourth", () => {
		expect(mapperCarriageTypeName("fourth")).toBe("Сидячий")
	})
})
