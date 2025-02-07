import { getRouteTicket } from "@config/router"
import { useGetDirectionsListDataSelector } from "@entities/Direction"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { useCurrentDirectionActions } from "@features/FillingFormCurrentDirection"
import { parseFormDataFromUrlHelper } from "@features/FillingFormForSearchOfDirections"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { fetchInitialDirectionListThunk } from "@widgets/DisplaySettingsDirectionsList"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { useCallback, useEffect, useMemo } from "react"
import { useParams } from "react-router"
import { useSearchParams } from "react-router-dom"
import { PageContent } from "../PageContent/PageContent"

const TicketPage = TypedMemo(() => {
	const { id } = useParams<{ id: string }>()
	const pagePath = getRouteTicket(id || "")

	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	const { setCurrentDirection } = useCurrentDirectionActions()

	const { additionalData: dataIds } = parseFormDataFromUrlHelper<{
		directionId: string
	}>(searchParams)

	const directions = useGetDirectionsListDataSelector()

	useInitialEffect(
		useCallback(() => {
			dispatch(fetchInitialDirectionListThunk({ searchParams, namePage: pagePath.route }))
		}, [dispatch, pagePath.route, searchParams])
	)

	useEffect(() => {
		if (directions?.length) {
			const currentDirection = directions.filter(
				direction => direction?.departure?._id === dataIds?.directionId
			)?.[0]

			if (currentDirection) {
				setCurrentDirection(currentDirection)
			}
		}
	}, [dataIds?.directionId, directions, setCurrentDirection])

	const pageContent = (
		<>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			></Header>
			<BreadcrumbsLine stage={"tickets"} />
			<ContainerLayout>
				<PageContent />
			</ContainerLayout>
		</>
	)

	const footer = useMemo(() => <Footer pagePath={pagePath.route} />, [pagePath.route])

	return (
		<Page
			content={pageContent}
			footer={footer}
		/>
	)
})

export default TicketPage
