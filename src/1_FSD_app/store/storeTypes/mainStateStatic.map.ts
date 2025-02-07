import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { directionsListStateMap } from "@entities/Direction"
import type { formForSearchOfDirectionsStateMap } from "@features/FillingFormForSearchOfDirections"
import type { currentDirectionMapState } from "src/4_FSD_features/FillingFormCurrentDirection"

export type mainStateStaticMap = {
	formForSearchOfDirectionsStateMap: formForSearchOfDirectionsStateMap
	currentDirection: currentDirectionMapState
	directionsList: directionsListStateMap

	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
