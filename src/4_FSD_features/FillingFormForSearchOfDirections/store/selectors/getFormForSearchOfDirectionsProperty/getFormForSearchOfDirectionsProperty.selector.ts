import type { directionFormParametres } from "@entities/Direction"
import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import type { citiesDataForServerType } from "../../../types/formForSearch.type"
import type { formForSearchOfDirectionsStateMap } from "../../storeTypes/formForSearchOfDirectionsState.map"
import { getFormForSearchOfDirectionsSelector } from "../getFormForSearchOfDirections/getFormForSearchOfDirections.selector"

export const [
	useGetFormForSearchOfDirectionsIsValidFormSelector,
	getFormForSearchOfDirectionsIsValidFormSelector
] = buildCreateSelector(
	[getFormForSearchOfDirectionsSelector],
	(state: formForSearchOfDirectionsStateMap) => state?.isValidForm || false
)

export const [
	useGetFormForSearchOfDirectionsDataSelector,
	getFormForSearchOfDirectionsDataSelector
] = buildCreateSelector(
	[getFormForSearchOfDirectionsSelector],
	(state: formForSearchOfDirectionsStateMap) => state?.data
)

export const [
	useGetFormForSearchOfDirectionsDataForRequestSelector,
	getFormForSearchOfDirectionsDataForRequestSelector
] = buildCreateSelector(
	[getFormForSearchOfDirectionsSelector],
	(state: formForSearchOfDirectionsStateMap) => {
		let citiesData: citiesDataForServerType | undefined

		if (state?.data) {
			citiesData = {
				from_city_id: state.data?.fromCity?._id,
				to_city_id: state.data?.toCity?._id
			}
		}

		const data = Object.fromEntries(
			Object.entries(state?.data ?? {}).filter(
				([key]) => key !== "fromCity" && key !== "toCity"
			)
		)

		let result: directionFormParametres | undefined

		if (data && citiesData) {
			result = { ...data, ...citiesData }
		}

		return result
	}
)
