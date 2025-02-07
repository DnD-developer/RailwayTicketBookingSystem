import { type DeepPartial } from "@customTypes/global.types"
import type { asyncReducersList } from "@hooks/useAsyncReducer.hook"
import { StoreProvider } from "@providers/StoreProvider"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import type { Decorator } from "@storybook/react"

const asyncReducersDefault: asyncReducersList = {}

export const StoreDecorator = (
	initialState: DeepPartial<mainStateMap>,
	asyncReducers?: DeepPartial<ReducersMapObject<mainStateAsyncMap>>
): Decorator => {
	const asyncReducersDynamic = {
		...asyncReducersDefault,
		...asyncReducers
	}

	return Story => {
		const state: DeepPartial<mainStateMap> = initialState

		return (
			<StoreProvider
				initialState={state as mainStateMap}
				asyncReducers={asyncReducersDynamic as ReducersMapObject<mainStateAsyncMap>}
			>
				<Story />
			</StoreProvider>
		)
	}
}
