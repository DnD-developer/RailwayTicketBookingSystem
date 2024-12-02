import type { carriagePriceType } from "../../../types/carrriageData.type"

export function getMinPriceForSeat(priceInfo: carriagePriceType) {
	let key: keyof carriagePriceType

	const availablePriceInfo: number[] = []

	for (key in priceInfo) {
		if (Object.prototype.hasOwnProperty.call(priceInfo, key)) {
			const price = priceInfo[key]

			if (key !== "linens_price" && key !== "wifi_price") {
				if (price !== undefined) {
					availablePriceInfo.push(price)
				}
			}
		}
	}

	if (availablePriceInfo.length) {
		return Math.min(...availablePriceInfo)
	}

	return 0
}
