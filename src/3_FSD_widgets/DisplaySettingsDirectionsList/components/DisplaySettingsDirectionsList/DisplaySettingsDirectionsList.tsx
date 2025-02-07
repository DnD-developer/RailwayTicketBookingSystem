import { SHOW_LIMITS } from "@constants/common.constant"
import type { showLimit } from "@customTypes/common.types"
import {
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector,
	useGetDirectionsListTotalCountSelector
} from "@entities/Direction"
import {
	useFormForSearchDirectionsActions,
	useGetFormForSearchOfDirectionsDataForRequestSelector,
	useGetFormForSearchOfDirectionsIsValidFormSelector
} from "@features/FillingFormForSearchOfDirections"
import { Pagination } from "@features/Pagination"
import { ShowLimit } from "@features/ShowLimit"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { PropsWithChildren } from "react"
import { useCallback, useMemo } from "react"
import { fetchDirectionsListThunk } from "../../store/thunks/fetchDirectionsListThunk/fetchDirectionsList.thunk"

type DisplaySettingsDirectionsListProps = {
	className?: string
	namePage?: string
} & PropsWithChildren
export const DisplaySettingsDirectionsList = TypedMemo(
	(props: DisplaySettingsDirectionsListProps) => {
		const { className, children: directionsList, namePage } = props

		const dispatch = useAppDispatch()

		const isLoading = useGetDirectionsListIsLoadingSelector()
		const error = useGetDirectionsListErrorSelector()

		const total = useGetDirectionsListTotalCountSelector()
		const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
		const isValidForm = useGetFormForSearchOfDirectionsIsValidFormSelector()
		const { setDisplayParametres } = useFormForSearchDirectionsActions()

		const onSearchHandler = useCallback(() => {
			if (formParametres && isValidForm) {
				dispatch(fetchDirectionsListThunk({ namePage: namePage }))
			}
		}, [dispatch, formParametres, isValidForm, namePage])

		const quantity = useMemo(
			() => Math.ceil(total / (formParametres?.limit || SHOW_LIMITS[0])),
			[formParametres?.limit, total]
		)

		const onChangeLimitHandler = useCallback(
			(value: showLimit) => {
				if (isValidForm) {
					setDisplayParametres({ limit: value })
					onSearchHandler()
				}
			},
			[isValidForm, onSearchHandler, setDisplayParametres]
		)

		const onChangeOffsetHandler = useCallback(
			(value: number) => {
				if (isValidForm) {
					setDisplayParametres({ offset: value })
					onSearchHandler()
				}
			},
			[isValidForm, onSearchHandler, setDisplayParametres]
		)

		return (
			<VStack
				className={classNamesHelp(undefined, undefined, [className])}
				gap={"XL"}
				align={"flexEnd"}
			>
				{!isLoading && !error && Boolean(total) && (
					<HStack
						className={classNamesHelp(undefined, undefined, [className])}
						align={"center"}
						justify={"spaceBetween"}
					>
						<Text
							text={`найдено ${total}`}
							fontSizeText={"s"}
						/>
						<ShowLimit
							value={formParametres?.limit}
							onChange={onChangeLimitHandler}
						/>
					</HStack>
				)}

				{directionsList}

				{!isLoading && !error && Boolean(total) && (
					<Pagination
						value={formParametres?.offset}
						onChange={onChangeOffsetHandler}
						quantity={quantity}
					/>
				)}
			</VStack>
		)
	}
)
