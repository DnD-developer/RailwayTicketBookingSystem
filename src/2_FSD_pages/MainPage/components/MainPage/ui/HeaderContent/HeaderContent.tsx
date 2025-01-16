import { TitleIcon } from "@assets/index"
import { getRouteChooseTrain } from "@config/router"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { HStack } from "@ui/Stack"
import { SearchDirections } from "@widgets/SearchDirections"
import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./HeaderContent.module.scss"

type HeaderContentProps = {
	className?: string
}
export const HeaderContent = memo<HeaderContentProps>(props => {
	const { className } = props

	const navigate = useNavigate()

	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()

	const onSearchHandler = useCallback(() => {
		navigate(createQueryParams(getRouteChooseTrain().route, formParametres))
	}, [formParametres, navigate])

	return (
		<HStack
			align={"center"}
			justify={"flexEnd"}
			className={classNamesHelp(undefined, undefined, [className])}
		>
			<TitleIcon className={styles.title} />
			<SearchDirections
				view={"compact"}
				onSearch={onSearchHandler}
			/>
		</HStack>
	)
})
