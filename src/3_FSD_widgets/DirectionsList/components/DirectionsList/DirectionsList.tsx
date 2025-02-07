import { getRouteTicket } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import {
	DirectionCard,
	type directionGeneralDataType,
	useGetDirectionsListDataSelector,
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { OverlayLoader } from "@features/OverlayLoader"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { ReactNode } from "react"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./DirectionsList.module.scss"

type DirectionsListProps = {
	className?: string
} & testingProps

export const DirectionsList = TypedMemo((props: DirectionsListProps) => {
	const { className, isTestLoading = false } = props

	const data = useGetDirectionsListDataSelector()
	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()

	const navigate = useNavigate()

	const onChoiceDirectionHandler = useCallback(
		(direction: directionGeneralDataType) => {
			const params = {
				...formParametres,
				directionId: direction?.departure?._id
			}

			navigate(createQueryParams(getRouteTicket(direction?.id).route, params))
		},
		[formParametres, navigate]
	)

	let content: ReactNode = (
		<>
			{data.map(direction => (
				<DirectionCard
					key={direction.id}
					data={direction}
					onClick={onChoiceDirectionHandler}
				/>
			))}
		</>
	)

	if (isLoading || isTestLoading) {
		content = <OverlayLoader />
	}

	if (error) {
		content = (
			<Text
				className={styles.textError}
				title={"Нет подходящих билетов"}
				fontSizeTitle={"xl"}
				fontWeightTitle={"ultra-fat"}
				colorTitle={"main-dark"}
				align={"center"}
			/>
		)
	}

	return (
		<VStack
			className={classNamesHelp(styles.DirectionsList, undefined, [className])}
			gap={"XL"}
		>
			{content}
		</VStack>
	)
})
