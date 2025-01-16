// To Hold: написать тест

import {
	directionsListSliceActions,
	fetchDirectionsThunk,
	getDirectionsListIsInitSelector
} from "@entities/Direction"
import {
	getFormForSearchOfDirectionsDataForRequestSelector,
	getFormForSearchOfDirectionsIsValidFormSelector
} from "@features/FillingFormForSearchOfDirections/store/selectors/getFormForSearchOfDirectionsProperty/getFormForSearchOfDirectionsProperty.selector"
import { addQueryParams } from "@helpers/addQueryParams/addQueryParams.helper"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"

export const fetchDirectionsListThunk = createAsyncThunk<
	undefined,
	undefined,
	thunkConfigType<undefined>
>("DisplaySettingsDirectionsList/fetchDirectionsList", async (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI

	const isValid = getFormForSearchOfDirectionsIsValidFormSelector()(getState())
	const formParametres = getFormForSearchOfDirectionsDataForRequestSelector()(getState())
	const isInit = getDirectionsListIsInitSelector()(getState())

	const { directionsListInit } = directionsListSliceActions
	if (isValid && formParametres) {
		if (isInit) {
			addQueryParams(formParametres)
		} else {
			dispatch(directionsListInit())
		}

		dispatch(fetchDirectionsThunk(formParametres))
	}

	return undefined
})
