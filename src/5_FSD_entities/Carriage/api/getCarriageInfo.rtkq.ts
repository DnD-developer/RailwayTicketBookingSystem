import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getCarriageInfoRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import type { carriageDataFromServerType } from "../types/carrriageData.type"

const getCarriageInfoRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getCarriageInfo: build.query<carriageDataFromServerType[], string | undefined>({
			query: id => {
				return {
					url: getCarriageInfoRequestPaths(id)
				}
			}
		})
	})
})

export const { useGetCarriageInfoQuery } = getCarriageInfoRtkq
