import { TitleIcon } from "@assets/index"
import { getRouteChooseTrain } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
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

	const onSearchHandler = useCallback(() => {
		navigate(getRouteChooseTrain().route)
	}, [navigate])

	return (
		<HStack
			align={"center"}
			justify={"flexEnd"}
			className={classNamesHelp("", {}, [className])}
		>
			<TitleIcon className={styles.title} />
			<SearchDirections
				view={"compact"}
				onSearch={onSearchHandler}
			/>
		</HStack>
	)
})
