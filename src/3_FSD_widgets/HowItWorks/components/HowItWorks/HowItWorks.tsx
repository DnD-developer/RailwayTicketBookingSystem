import { BackgroundHowItWorks } from "@assets/index"
import { getRouteMainHowItWorks } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Background } from "@ui/Background"
import { ContainerLayout } from "@ui/layout"
import { VStack } from "@ui/Stack"
import { Advantages } from "../Advantages/Advantages"
import { HeaderHowItWorks } from "../HeaderHowItWorks/HeaderHowItWorks"
import styles from "./HowItWorks.module.scss"

type HowItWorksProps = {
	className?: string
}
export const HowItWorks = TypedMemo((props: HowItWorksProps) => {
	const { className } = props

	return (
		<section
			className={classNamesHelp(styles.HowItWorks, {}, [className])}
			id={getRouteMainHowItWorks().hash}
		>
			<ContainerLayout>
				<VStack gap={"gapXL"}>
					<HeaderHowItWorks />
					<Advantages />
				</VStack>
			</ContainerLayout>
			<Background background={BackgroundHowItWorks} />
		</section>
	)
})
