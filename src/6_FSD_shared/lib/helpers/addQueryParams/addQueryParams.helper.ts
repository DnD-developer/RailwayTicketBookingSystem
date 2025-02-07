import type { paramsType } from "@customTypes/common.types"

export function createQueryParams<T extends string | number | boolean>(params?: paramsType<T>) {
	const searchParams = new URLSearchParams()

	if (!params) return null

	Object.entries(params).forEach(([paramName, paramValue]) => {
		if (paramValue !== undefined) {
			searchParams.set(paramName, paramValue.toString())
		}
	})

	return `?${searchParams}`
}

export function addQueryParams<T extends string | number | boolean>(params?: paramsType<T>) {
	window.history.pushState({}, "", createQueryParams(params))
}
