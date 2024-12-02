import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { directionsListStateMap } from "@entities/Direction"
import type { formForSearchOfDirectionsStateMap } from "@features/FillingFormForSearchOfDirections"

export type mainStateStaticMap = {
	formForSearchOfDirectionsStateMap: formForSearchOfDirectionsStateMap
	directionsList: directionsListStateMap
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
