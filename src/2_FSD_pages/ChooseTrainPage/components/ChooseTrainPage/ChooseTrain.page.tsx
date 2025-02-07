import { getRouteChooseTrain } from "@config/router"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { useFormForSearchDirectionsActions } from "@features/FillingFormForSearchOfDirections"
import { LastTickets } from "@features/LastTickets"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { HStack, VStack } from "@ui/Stack"
import { DirectionsList } from "@widgets/DirectionsList"
import {
	DisplaySettingsDirectionsList,
	fetchDirectionsListThunk,
	fetchInitialDirectionListThunk
} from "@widgets/DisplaySettingsDirectionsList"
import { FilterDirections } from "@widgets/FilterDirections"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { SearchDirections } from "@widgets/SearchDirections"
import { memo, useCallback, useEffect, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import styles from "./ChooseTrain.module.scss"

const pagePath = getRouteChooseTrain()

const ChooseTrainPage = memo(() => {
	const dispatch = useAppDispatch()

	const onSearchHandler = useCallback(() => {
		dispatch(fetchDirectionsListThunk({ namePage: pagePath.route }))
	}, [dispatch])
	const { clearParametres } = useFormForSearchDirectionsActions()

	const [searchParams] = useSearchParams()

	useEffect(() => {
		dispatch(fetchInitialDirectionListThunk({ searchParams, namePage: pagePath.route }))

		return () => {
			clearParametres()
		}
		//eslint-disable-next-line
	}, [])

	const contentPage = (
		<>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			>
				<SearchDirections
					view={"large"}
					onSearch={onSearchHandler}
				/>
			</Header>
			<BreadcrumbsLine stage={"tickets"} />
			<div className={styles.content}>
				<ContainerLayout>
					<HStack gap={"XL"}>
						<VStack
							widthMax={false}
							TagType={"aside"}
							gap={"XL"}
						>
							<FilterDirections onSearch={onSearchHandler} />
							<LastTickets />
						</VStack>
						<DisplaySettingsDirectionsList namePage={pagePath.route}>
							<DirectionsList />
						</DisplaySettingsDirectionsList>
					</HStack>
				</ContainerLayout>
			</div>
		</>
	)

	const footer = useMemo(() => <Footer pagePath={pagePath.route} />, [])

	return (
		<Page
			content={contentPage}
			footer={footer}
		/>
	)
})

export default ChooseTrainPage
