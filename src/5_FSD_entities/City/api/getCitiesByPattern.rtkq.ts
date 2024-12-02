import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getCitiesRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import type { cityDataType } from "../types/cityData.type"

const getCitiesByPatternRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getCitiesByPattern: build.query<cityDataType[], string>({
			query: name => {
				return {
					url: getCitiesRequestPaths(name)
				}
			},
			keepUnusedDataFor: 1
			// transformResponse: (
			// 	response: {
			// 		_id: cityDataType["_id"]
			// 		name: cityDataType["name"]
			// 	}[]
			// ) => {
			// 	if (response.length) {
			// 		return response.map(city => ({ id: city._id, name: city.name }))
			// 	}
			//
			// 	return []
			// }
		})
	})
})

export const { useGetCitiesByPatternQuery } = getCitiesByPatternRtkq
export const getCitiesByPattern = getCitiesByPatternRtkq.endpoints.getCitiesByPattern.initiate
