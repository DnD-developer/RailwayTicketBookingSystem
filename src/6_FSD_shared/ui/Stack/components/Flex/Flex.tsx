import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react"
import styles from "./Flex.module.scss"

type justifyType = "spaceBetween" | "spaceAround" | "flexEnd" | "flexStart" | "center"
type alignType = "center" | "flexEnd" | "flexStart"
type directionType = "column" | "row"
type gapType = "gapXXS" | "gapXS" | "gapS" | "gapM" | "gapL" | "gapXL"
type tagType =
	| "ul"
	| "nav"
	| "header"
	| "footer"
	| "section"
	| "aside"
	| "article"
	| "div"
	| "li"
	| "form"

export type FlexProps = {
	className?: string
	justify?: justifyType
	align?: alignType
	direction?: directionType
	TagType?: tagType
	gap?: gapType
	widthMax?: boolean
} & PropsWithChildren &
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const justifyMap: Record<justifyType, string> = {
	spaceBetween: styles.justifySpaceBetween,
	center: styles.justifyCenter,
	spaceAround: styles.justifySpaceAround,
	flexEnd: styles.justifyFlexEnd,
	flexStart: styles.justifyFlexStart
}

const alignMap: Record<alignType, string> = {
	center: styles.alignCenter,
	flexStart: styles.alignFlexStart,
	flexEnd: styles.alignFlexEnd
}

const directionMap: Record<directionType, string> = {
	row: styles.directionRow,
	column: styles.directionColumn
}

const gapMap: Record<gapType, string> = {
	gapXXS: styles.gapXXS,
	gapXS: styles.gapXS,
	gapS: styles.gapS,
	gapM: styles.gapM,
	gapL: styles.gapL,
	gapXL: styles.gapXL
}

export const Flex = TypedMemo((props: FlexProps) => {
	const {
		className,
		justify = "flexStart",
		direction = "row",
		widthMax = true,
		align = "flexStart",
		gap,
		children,
		TagType = "div"
	} = props

	const mods: Mods = {
		[styles.widthMax]: widthMax
	}

	const classNames = [
		className,
		justifyMap[justify],
		alignMap[align],
		directionMap[direction],
		gap ? gapMap[gap] : undefined
	]

	return <TagType className={classNamesHelp(styles.Flex, mods, classNames)}>{children}</TagType>
})
