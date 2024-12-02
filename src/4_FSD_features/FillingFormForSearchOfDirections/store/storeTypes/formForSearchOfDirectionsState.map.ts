import type { directionFormParametres } from "@entities/Direction"
import type {
	citiesDataForServerType,
	citiesDataTypeForFormType
} from "../../types/formForSearch.type"

export type formForSearchOfDirectionsStateMap = {
	isValidForm: boolean
	data?: Omit<directionFormParametres, keyof citiesDataForServerType> & citiesDataTypeForFormType
}
