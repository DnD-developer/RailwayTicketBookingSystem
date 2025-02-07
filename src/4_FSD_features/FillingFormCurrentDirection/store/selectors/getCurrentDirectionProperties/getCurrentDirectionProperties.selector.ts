import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import type { currentDirectionMapState } from "../../storeTypes/currentDirectionMapState.map"
import { getCurrentDirectionSelector } from "../getCurrentDirection/getCurrentDirection.selector"

export const [useGetCurrentDirectionInfoSelector, getCurrentDirectionInfoSelector] =
	buildCreateSelector(
		[getCurrentDirectionSelector],
		(state: currentDirectionMapState) => state?.directionInfo
	)

export const [useGetCurrentDirectionCarriageInfoSelector, getCurrentDirectionCarriageInfoSelector] =
	buildCreateSelector(
		[getCurrentDirectionSelector],
		(state: currentDirectionMapState) => state?.carriageInfo
	)

export const [useGetCurrentDirectionSeatsInfoSelector, getCurrentDirectionSeatsInfoSelector] =
	buildCreateSelector(
		[getCurrentDirectionSelector],
		(state: currentDirectionMapState) => state?.seatsInfo || 1
	)

export const [useGetCurrentDirectionSumSelector, getCurrentDirectionSumSelector] =
	buildCreateSelector(
		[getCurrentDirectionSelector],
		(state: currentDirectionMapState) => state?.sum || 0
	)
