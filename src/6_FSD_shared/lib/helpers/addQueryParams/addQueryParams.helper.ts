import type { paramsType } from "@customTypes/common.types"

export function createQueryParams<T extends string | number | boolean>(
	params?: paramsType<T>,
	page?: string
) {
	const searchParams = new URLSearchParams()

	if (!params) return null

	Object.entries(params).forEach(([paramName, paramValue]) => {
		if (paramValue !== undefined) {
			searchParams.set(paramName, paramValue.toString())
		}
	})

	return `#${page || "/"}?${searchParams}`
}

export function addQueryParams<T extends string | number | boolean>(
	params?: paramsType<T>,
	namePage?: string
) {
	window.history.pushState({}, "", createQueryParams(params, namePage))
}
