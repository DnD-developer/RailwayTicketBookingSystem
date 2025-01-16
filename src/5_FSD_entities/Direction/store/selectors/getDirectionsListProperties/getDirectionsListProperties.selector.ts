import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { directionsListAdapter } from "../../slices/directionsList.slice"
import type { directionsListStateMap } from "../../storeTypes/directionsListState.map"
import { getDirectionsListSelector } from "../getDirectionsList/getDirectionsList.selector"

export const [useGetDirectionsListIsInitSelector, getDirectionsListIsInitSelector] =
	buildCreateSelector(
		[getDirectionsListSelector],
		(state?: directionsListStateMap) => state?._inited || false
	)

export const [useGetDirectionsListIsLoadingSelector, getDirectionsListIsLoadingSelector] =
	buildCreateSelector(
		[getDirectionsListSelector],
		(state?: directionsListStateMap) => state?.isLoading || false
	)

export const [useGetDirectionsListErrorSelector, getDirectionsListErrorSelector] =
	buildCreateSelector(
		[getDirectionsListSelector],
		(state?: directionsListStateMap) => state?.error
	)

const initialState = directionsListAdapter.getInitialState()

export const {
	selectAll: getDirectionsListDataSelector,
	selectById: getDirectionsListItemSelector,
	selectTotal: getDirectionsListTotalSelector
} = directionsListAdapter.getSelectors<mainStateMap>(state => state?.directionsList || initialState)

export const [useGetDirectionsListDataSelector] = buildSelector(getDirectionsListDataSelector)
export const [useGetDirectionsListItemSelector] = buildSelector(getDirectionsListItemSelector)

export const [useGetDirectionsListTotalCountSelector, getDirectionsListTotalCountSelector] =
	buildCreateSelector(
		[getDirectionsListSelector],
		(state?: directionsListStateMap) => state?.totalCount || 0
	)
