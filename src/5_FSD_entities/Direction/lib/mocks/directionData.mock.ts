// To Hold -  сделать фабрику моков
import type { directionsGeneralDataType } from "../../types/directionData.type"

export const directionDataMock = (): directionsGeneralDataType => {
	return {
		id: "1",
		have_first_class: false,
		have_second_class: false,
		have_third_class: false,
		have_fourth_class: false,
		have_wifi: true,
		have_air_conditioning: true,
		is_express: true,
		min_price: 2214,
		available_seats: 254,
		available_seats_info: {
			second: 32,
			third: 96
		},
		departure: {
			_id: "66ac8b84cb563f0052176a17",
			have_first_class: false,
			have_second_class: true,
			have_third_class: true,
			have_fourth_class: false,
			have_wifi: true,
			have_air_conditioning: true,
			is_express: true,
			min_price: 2214,
			duration: 254340,
			available_seats: 127,
			available_seats_info: {
				second: 32,
				third: 96
			},
			train: {
				_id: "66ac8b6fcb563f00521759ca",
				name: "Перун - 99"
			},
			from: {
				railway_station_name: "Киевский",
				city: {
					_id: "66ac8b69cb563f0052174f45",
					name: "москва"
				},
				datetime: 1672949001
			},
			to: {
				railway_station_name: "Московский",
				city: {
					_id: "66ac8b69cb563f0052174f46",
					name: "санкт-петербург"
				},
				datetime: 1673203341
			},
			price_info: {
				second: {
					top_price: 2652,
					bottom_price: 2214
				},
				third: {
					top_price: 3455,
					bottom_price: 2525,
					side_price: 3855
				}
			}
		},
		arrival: {
			_id: "66ac8b84cb563f0052176a18",
			have_first_class: false,
			have_second_class: true,
			have_third_class: true,
			have_fourth_class: false,
			have_wifi: true,
			have_air_conditioning: true,
			is_express: true,
			min_price: 2214,
			duration: 254340,
			available_seats: 127,
			available_seats_info: {
				second: 32,
				third: 96
			},
			train: {
				_id: "66ac8b6fcb563f00521759ca",
				name: "Перун - 100"
			},
			from: {
				railway_station_name: "Киевский",
				city: {
					_id: "66ac8b69cb563f0052174f46",
					name: "санкт-петербург"
				},

				datetime: 1673203341
			},
			to: {
				railway_station_name: "Московский",
				city: {
					_id: "66ac8b69cb563f0052174f45",
					name: "москва"
				},
				datetime: 1672949001
			},
			price_info: {
				second: {
					top_price: 2652,
					bottom_price: 2214
				},
				third: {
					top_price: 3455,
					bottom_price: 2525,
					side_price: 3855
				}
			}
		}
	}
}
