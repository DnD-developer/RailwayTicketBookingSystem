import type { directionDisplayParametres } from "@entities/Direction"
import type { formDataType } from "../../../store/storeTypes/formForSearchOfDirectionsState.map"

export function parseFormDataFromUrlHelper<T extends object>(
	searchParams?: URLSearchParams
): { formData: formDataType; displayData: directionDisplayParametres; additionalData: T } {
	let formData = {}
	let displayData = {}
	let additionalData: T = Object.create({})

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
			case "date_start":
			case "date_end":
			case "date_start_arrival":
			case "date_end_arrival":
			case "have_first_class":
			case "have_second_class":
			case "have_third_class":
			case "have_fourth_class":
			case "have_wifi":
			case "have_air_conditioning":
			case "have_express":
			case "price_from":
			case "price_to":
			case "start_departure_hour_from":
			case "start_departure_hour_to":
			case "start_arrival_hour_from":
			case "start_arrival_hour_to":
			case "end_departure_hour_from":
			case "end_departure_hour_to":
			case "end_arrival_hour_from":
			case "end_arrival_hour_to":
				formParam = {
					[key]: value
				}

				formData = { ...formData, ...formParam }
				break
			default:
				formParam = {
					[key]: value
				}

				additionalData = { ...additionalData, ...formParam }
				break
		}
	})

	return { formData, displayData, additionalData }
}
