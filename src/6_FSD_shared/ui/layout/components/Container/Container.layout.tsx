import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { PropsWithChildren } from "react"
import styles from "./ContainerLayout.module.scss"

type ContainerLayoutProps = {
	className?: string
} & PropsWithChildren
export const ContainerLayout = TypedMemo((props: ContainerLayoutProps) => {
	const { className, children } = props

	return <div className={classNamesHelp(styles.ContainerLayout, {}, [className])}>{children}</div>
})
