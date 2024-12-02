import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getDirectionsRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import { uid } from "uid"
import type {
	directionsGeneralDataFromServerType,
	directionsGeneralDataType
} from "../types/directionData.type"
import type {
	directionFormParametres,
	directionsDisplayParametres
} from "../types/directionFormParametres.type"

const getDirectionsRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getDirections: build.query<
			directionsGeneralDataType[],
			directionFormParametres & directionsDisplayParametres
		>({
			query: parametres => {
				return {
					url: getDirectionsRequestPaths(),
					params: {
						...parametres
					}
				}
			},
			transformResponse: (response: {
				totalCount: number
				items: directionsGeneralDataFromServerType[]
			}) => {
				if (response.items) {
					return response.items.map(item => ({ ...item, id: uid() }))
				}

				return []
			}
		})
	})
})

export const getDirections = getDirectionsRtkq.endpoints.getDirections.initiate
export const { useGetDirectionsQuery } = getDirectionsRtkq
