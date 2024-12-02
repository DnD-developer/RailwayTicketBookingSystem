import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { type HtmlHTMLAttributes } from "react"
import { BarLoader } from "react-spinners"
import { VStack } from "../../../Stack"
import styles from "./FallBackLoader.module.scss"

type FallbackLoaderProps = {} & HtmlHTMLAttributes<HTMLDivElement>

export const FallbackLoader = TypedMemo((props: FallbackLoaderProps) => {
	const { className, ...otherProps } = props

	return (
		<VStack
			align={"center"}
			justify={"center"}
			className={classNamesHelp(styles.FallBackLoader, {}, [className])}
			{...otherProps}
		>
			<BarLoader
				className={styles.loaderContent}
				color={"#FFA800"}
			/>
		</VStack>
	)
})
