import { getRouteChooseTrain } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import {
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { OverlayLoader } from "@features/OverlayLoader"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { DirectionDetails } from "@widgets/DirectionDetails"
import type { ReactNode } from "react"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PageContent.module.scss"

type PageContentProps = {
	className?: string
} & testingProps

export const PageContent = TypedMemo((props: PageContentProps) => {
	const { className } = props

	const navigate = useNavigate()

	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()

	let content: ReactNode = null

	content = <DirectionDetails />

	if (isLoading) {
		content = <OverlayLoader />
	}

	if (error) {
		content = (
			<Text
				title={"Ticket Not Found"}
				TitleType={"h3"}
				colorTitle={"error"}
				align={"center"}
			/>
		)
	}

	const onClickBackHandler = useCallback(() => {
		navigate(createQueryParams(getRouteChooseTrain().route, formParametres))
	}, [formParametres, navigate])

	const onClickForwardHandler = useCallback(() => {
		navigate(createQueryParams(getRouteChooseTrain().route, formParametres))
	}, [formParametres, navigate])

	return (
		<HStack
			className={classNamesHelp(styles.PageContent, undefined, [className])}
			gap={"XL"}
		>
			<VStack
				gap={"XL"}
				align={"flexEnd"}
				justify={"spaceBetween"}
			>
				<HStack
					align={"center"}
					justify={"spaceBetween"}
				>
					<Text
						title={"Выбор мест"}
						TitleType={"h2"}
						colorTitle={"main-dark"}
						textTransform={"uppercase"}
					/>
					<Button
						width={"s"}
						height={"m"}
						theme={"defaultLight"}
						onClick={onClickBackHandler}
					>
						{"Назад"}
					</Button>
				</HStack>

				{content}

				{(!isLoading || error) && (
					<Button
						width={"s"}
						height={"m"}
						theme={"defaultLight"}
						onClick={onClickForwardHandler}
					>
						{"Далее"}
					</Button>
				)}
			</VStack>
		</HStack>
	)
})
