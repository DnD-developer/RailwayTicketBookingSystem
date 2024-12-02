import { describe, expect, test } from "@jest/globals"
import { convertSecondsToTime } from "./convertSecondsToTime.helper"

describe("convertSecondsToTimeHelperTest", () => {
	test("less 12", () => {
		expect(convertSecondsToTime(32400)).toBe("09:00")
	})

	test("up 12", () => {
		expect(convertSecondsToTime(44100)).toBe("12:15")
	})

	test("23:58", () => {
		expect(convertSecondsToTime(86300)).toBe("23:58")
	})

	test("0:59", () => {
		expect(convertSecondsToTime(3540)).toBe("00:59")
	})
})
