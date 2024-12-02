import type { carriageClassType } from "../../../types/carrriageData.type"

export function mapperCarriageTypeName(carriageClass: carriageClassType) {
	switch (carriageClass) {
		case "first":
			return "Люкс"
		case "second":
			return "Купе"
		case "third":
			return "Плацкарт"
		default:
			return "Сидячий"
	}
}
