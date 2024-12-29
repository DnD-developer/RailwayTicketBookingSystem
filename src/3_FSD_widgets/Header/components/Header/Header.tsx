import { getRouteMainHeader } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { PropsWithChildren } from "react"
import { HeaderBackground } from "../HeaderBackground/HeaderBackground"
import { HeaderContent } from "../HeaderContent/HeaderContent"
import { HeaderLogo } from "../HeaderLogo/HeaderLogo"
import { NavLinks } from "../NavLinks/NavLinks"
import styles from "./Header.module.scss"

type HeaderProps = {
	className?: string
	backgroundType: "main" | "search" | "end"
} & PropsWithChildren
export const Header = TypedMemo((props: HeaderProps) => {
	const { className, backgroundType = "main", children } = props

	return (
		<header
			className={classNamesHelp(styles.Header, {}, [className, styles[backgroundType]])}
			id={getRouteMainHeader().hash}
		>
			<HeaderLogo />
			<NavLinks />
			<HeaderContent>{children}</HeaderContent>
			<HeaderBackground typeBackground={backgroundType} />
		</header>
	)
})
