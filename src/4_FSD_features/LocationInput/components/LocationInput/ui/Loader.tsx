import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo } from "react"
import { ClipLoader } from "react-spinners"
import styles from "./Loader.module.scss"

type LoaderProps = {
	className?: string
}
export const Loader = memo<LoaderProps>(props => {
	const { className } = props

	return (
		<ClipLoader
			className={classNamesHelp(styles.Loader, {}, [className])}
			color={"#ffa800"}
			size={25}
		/>
	)
})
