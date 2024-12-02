import { describe, expect, test } from "@jest/globals"
import { convertSecondsToHour } from "./convertSecondsToHour.helper"

describe("convertSecondsToHourHelperTest", () => {
	test("withOutMinute", () => {
		expect(convertSecondsToHour(3600)).toBe(1)
	})
	test("withMinute", () => {
		expect(convertSecondsToHour(7983)).toBe(2)
	})
})
