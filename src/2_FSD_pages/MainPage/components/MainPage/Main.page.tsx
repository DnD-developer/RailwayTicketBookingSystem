import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useScrollToAnchor } from "@providers/RouterProvider/lib/hooks/useScrollToAnchor.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AboutUs } from "@widgets/AboutUs"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { HowItWorks } from "@widgets/HowItWorks"
import { Reviews } from "@widgets/Reviews"
import { HeaderContent } from "./ui/HeaderContent/HeaderContent"

type MainPageProps = {
	className?: string
}
const MainPage = TypedMemo((props: MainPageProps) => {
	const { className } = props

	useScrollToAnchor()

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header typeBackground={"main"}>
				<HeaderContent />
			</Header>
			<AboutUs />
			<HowItWorks />
			<Reviews />
			<Footer />
		</div>
	)
})

export default MainPage
