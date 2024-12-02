import {
	fetchDirectionsThunk,
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { ContainerLayout } from "@ui/layout"
import { HStack, VStack } from "@ui/Stack"
import { DirectionsList } from "@widgets/DirectionsList"
import { FilterDirections } from "@widgets/FilterDirections"
import { Header } from "@widgets/Header"
import { SearchDirections } from "@widgets/SearchDirections"
import { memo, useCallback, useEffect } from "react"
import styles from "./ChooseTrain.module.scss"

type ChooseTrainPageProps = {
	className?: string
}

const ChooseTrainPage = memo<ChooseTrainPageProps>(props => {
	const { className } = props

	const dispatch = useAppDispatch()

	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()

	const onSearchHandler = useCallback(() => {
		if (formParametres) {
			dispatch(fetchDirectionsThunk(formParametres))
		}
	}, [dispatch, formParametres])

	useEffect(() => {
		onSearchHandler()
		//eslint-disable-next-line
	}, [])

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header typeBackground={"search"}>
				<SearchDirections
					view={"large"}
					onSearch={onSearchHandler}
				/>
			</Header>
			<div className={styles.content}>
				<ContainerLayout>
					{isLoading ?
						"Loading"
					:	<HStack gap={"gapXL"}>
							<VStack widthMax={false}>
								<FilterDirections onSearch={onSearchHandler} />
							</VStack>
							<div>
								{error && "Error"}
								<DirectionsList />
							</div>
						</HStack>
					}
				</ContainerLayout>
			</div>
		</div>
	)
})

export default ChooseTrainPage
