import { describe, expect, test } from "@jest/globals"
import { convertHourToSeconds } from "./convertHourToSeconds.helper"

describe("convertHourToSecondsHelperTest", () => {
	test("default", () => {
		expect(convertHourToSeconds(2)).toBe(7200)
	})
})
