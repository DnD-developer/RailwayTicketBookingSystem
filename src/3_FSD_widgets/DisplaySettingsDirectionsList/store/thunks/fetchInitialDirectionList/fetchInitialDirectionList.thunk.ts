import { parseFormDataFromUrlHelper } from "@features/FillingFormForSearchOfDirections/lib/helpers/parseFormDataFromUrl/parseFormDataFromUrl.helper"
import { formForSearchDirectionsActions } from "@features/FillingFormForSearchOfDirections/store/slices/formForSearchOfDirections.slice"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import { fetchDirectionsListThunk } from "../fetchDirectionsListThunk/fetchDirectionsList.thunk"

type settingsType = {
	namePage?: string
	searchParams?: URLSearchParams | undefined
}

export const fetchInitialDirectionListThunk = createAsyncThunk<
	undefined,
	settingsType,
	thunkConfigType<undefined>
>(
	"DisplaySettingsDirectionsList/fetchInitialDirectionList",
	({ searchParams, namePage }, thunkAPI) => {
		const { dispatch } = thunkAPI

		const { formData, displayData } = parseFormDataFromUrlHelper(searchParams)

		const { setParametres, setDisplayParametres } = formForSearchDirectionsActions

		dispatch(setParametres(formData))
		dispatch(setDisplayParametres(displayData))
		dispatch(fetchDirectionsListThunk({ isAllowedUpdateParams: false, namePage }))

		return undefined
	}
)
