import { memo } from "react"
import { BackgroundMainPageImage, BackgroundSearchPageImage } from "@assets/index"
import { Background as BackgroundUi } from "@ui/Background"

type HeaderBackgroundProps = {
	className?: string
	typeBackground: "main" | "search" | "end"
}
export const HeaderBackground = memo<HeaderBackgroundProps>(props => {
	const { typeBackground } = props

	let srcBack = BackgroundMainPageImage

	if (typeBackground === "main") {
		srcBack = BackgroundMainPageImage
	}

	if (typeBackground === "search") {
		srcBack = BackgroundSearchPageImage
	}

	return <BackgroundUi background={srcBack} />
})
