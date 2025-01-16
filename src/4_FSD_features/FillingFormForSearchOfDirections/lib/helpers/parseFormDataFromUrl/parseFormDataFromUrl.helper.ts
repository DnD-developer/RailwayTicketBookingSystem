import type { directionDisplayParametres } from "@entities/Direction"
import type { formDataType } from "../../../store/storeTypes/formForSearchOfDirectionsState.map"

export function parseFormDataFromUrlHelper(
	searchParams?: URLSearchParams
): [formDataType, directionDisplayParametres] {
	let formData = {}
	let displayData = {}

	searchParams?.forEach((value, key) => {
		let formParam = {}
		const keyCity = key === "from_city_id" ? "fromCity" : "toCity"

		switch (key) {
			case "from_city_id":
			case "to_city_id":
				formParam = {
					[keyCity]: {
						_id: value,
						name: ""
					}
				}

				formData = { ...formData, ...formParam }
				break
			case "limit":
			case "offset":
				formParam = {
					[key]: parseInt(value)
				}

				displayData = { ...displayData, ...formParam }
				break
			default:
				formParam = {
					[key]: value
				}

				formData = { ...formData, ...formParam }
				break
		}
	})

	return [formData, displayData]
}
