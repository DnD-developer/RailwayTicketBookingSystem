import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { directionsListSliceReducers } from "@entities/Direction"
import { formForSearchDirectionsReducer } from "@features/FillingFormForSearchOfDirections"
import type { Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import type { reducerManagerType } from "./reducerManager"
import { createReducerManager } from "./reducerManager"
import { type appStoreType } from "./storeTypes/appStoreType"
import { type mainStateMap } from "./storeTypes/mainState.map"
import { type mainStateAsyncMap } from "./storeTypes/mainStateAsync.map"
import { type mainStateStaticMap } from "./storeTypes/mainStateStatic.map"

export const storeCreator = ({ reduce }: reducerManagerType, initialState?: mainStateMap) => {
	return configureStore({
		reducer: reduce as Reducer<mainStateMap>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat(rtkBaseApi.middleware)
	})
}

export function createReduxStore(
	initialState?: mainStateMap,
	asyncReducers?: ReducersMapObject<mainStateAsyncMap>
) {
	const staticReducer: ReducersMapObject<mainStateStaticMap> = {
		formForSearchOfDirectionsStateMap: formForSearchDirectionsReducer,
		directionsList: directionsListSliceReducers,
		[rtkBaseApi.reducerPath]: rtkBaseApi.reducer
	}

	const rootReducer: ReducersMapObject<mainStateMap> = {
		...staticReducer,
		...asyncReducers
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = storeCreator(reducerManager, initialState)

	const appStore: appStoreType = { ...store, reducerManager: reducerManager }

	return appStore
}
