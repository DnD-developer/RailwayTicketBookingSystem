import { describe, expect, test } from "@jest/globals"
import { createQueryParams } from "./createLinkWithParams.helper"

describe("createLinkWithParamsHelperTest", () => {
	test("with one parametres", () => {
		expect(createQueryParams("/", { test: "test1" })).toBe("/?test=test1")
	})

	test("with multiple parametres", () => {
		expect(createQueryParams("/", { test: "test1", test1: 2, test2: true })).toBe(
			"/?test=test1&test1=2&test2=true"
		)
	})
})
