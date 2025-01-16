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
		})
	})
})

export const { useGetCitiesByPatternQuery } = getCitiesByPatternRtkq
export const getCitiesByPattern = getCitiesByPatternRtkq.endpoints.getCitiesByPattern.initiate

// To Feature оптимизировать запрос. Удаление неактуальных.
