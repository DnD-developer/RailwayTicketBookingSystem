import { LogoIcon } from "@assets/index"
import { getRouteMain } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppLink } from "../../../AppLink"
import styles from "./Logo.module.scss"

type LogoProps = {
	className?: string
}
export const Logo = TypedMemo((props: LogoProps) => {
	const { className } = props

	return (
		<AppLink
			to={getRouteMain().route}
			className={classNamesHelp("", {}, [className])}
		>
			<LogoIcon className={styles.logo} />
		</AppLink>
	)
})
