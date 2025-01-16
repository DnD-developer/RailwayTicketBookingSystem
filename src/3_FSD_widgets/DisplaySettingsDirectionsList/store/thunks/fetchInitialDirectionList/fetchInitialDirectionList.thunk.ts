import { parseFormDataFromUrlHelper } from "@features/FillingFormForSearchOfDirections/lib/helpers/parseFormDataFromUrl/parseFormDataFromUrl.helper"
import { formForSearchDirectionsActions } from "@features/FillingFormForSearchOfDirections/store/slices/formForSearchOfDirections.slice"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import { fetchDirectionsListThunk } from "../fetchDirectionsListThunk/fetchDirectionsList.thunk"

export const fetchInitialDirectionListThunk = createAsyncThunk<
	undefined,
	URLSearchParams | undefined,
	thunkConfigType<undefined>
>("DisplaySettingsDirectionsList/fetchInitialDirectionList", (searchParams, thunkAPI) => {
	const { dispatch } = thunkAPI

	const [formData, displayData] = parseFormDataFromUrlHelper(searchParams)

	const { setParametres, setDisplayParametres } = formForSearchDirectionsActions

	dispatch(setParametres(formData))
	dispatch(setDisplayParametres(displayData))
	dispatch(fetchDirectionsListThunk())

	return undefined
})
