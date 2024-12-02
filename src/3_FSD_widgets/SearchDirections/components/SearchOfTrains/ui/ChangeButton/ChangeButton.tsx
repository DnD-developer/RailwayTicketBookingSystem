import { memo, useCallback } from "react"
import styles from "./ChangeButton.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { ChangeIcon } from "@assets/index"
import { Button } from "@ui/Button"

type ChangeButtonProps = {
	className?: string
	onClick?: () => void
}
export const ChangeButton = memo<ChangeButtonProps>(props => {
	const { className, onClick } = props

	const onClickHandler = useCallback(() => {
		onClick?.()
	}, [onClick])

	return (
		<Button
			className={classNamesHelp("", {}, [className])}
			theme={"clear"}
			onClick={onClickHandler}
			color={"main-gray"}
		>
			<ChangeIcon className={styles.icon} />
		</Button>
	)
})
