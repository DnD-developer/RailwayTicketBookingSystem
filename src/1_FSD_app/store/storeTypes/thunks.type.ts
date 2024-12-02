import type { mainStateMap } from "./mainState.map"

export type thunkConfigType<R> = {
	rejectValue: R
	state: mainStateMap
}
