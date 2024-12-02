import { getRouteNameHowItWorks } from "@config/router/helpers/getterRoutesNames.helper"
import { LEARN_MORE_LINK } from "@constants/links.constant"
import { AppLink } from "@ui/AppLink"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { memo } from "react"
import styles from "./HeaderHowItWorks.module.scss"

type HeaderHowItWorksProps = {
	className?: string
}
export const HeaderHowItWorks = memo<HeaderHowItWorksProps>(props => {
	const { className } = props

	return (
		<HStack
			justify={"spaceBetween"}
			align={"center"}
			className={className}
		>
			<Text
				title={getRouteNameHowItWorks()}
				colorTitle={"main-light"}
				fontWeightTitle={"fat"}
				fontSizeText={"l"}
				classNameTitle={styles.title}
			/>
			<AppLink
				fontWeight={"ultra-fat"}
				fontSize={"m"}
				color={"main-light"}
				to={LEARN_MORE_LINK}
				target={"_blank"}
				className={styles.link}
			>
				{"Узнать больше"}
			</AppLink>
		</HStack>
	)
})
