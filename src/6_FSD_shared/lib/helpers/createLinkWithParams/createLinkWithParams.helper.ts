import { type paramsType } from "@customTypes/common.types"

export function createQueryParams<T extends string | number | boolean>(
	link: string,
	params: paramsType<T>
) {
	let linkResult = link

	Object.entries(params).forEach(([key, value], i) => {
		if (i === 0) {
			linkResult = `${linkResult}?${key}=${value}`
		} else {
			linkResult = `${linkResult}&${key}=${value}`
		}
	})

	return linkResult
}
