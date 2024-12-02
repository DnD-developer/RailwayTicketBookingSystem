import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getSubscribeRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import type { responseSubscription } from "../types/responseSubscription.type"

const toSubscribeRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		toSubscribe: build.mutation<responseSubscription, string>({
			query: email => {
				return {
					url: getSubscribeRequestPaths(email),
					method: "POST"
				}
			}
		})
	})
})

export const { useToSubscribeMutation } = toSubscribeRtkq
