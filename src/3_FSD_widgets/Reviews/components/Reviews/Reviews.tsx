import { getRouteMainReviews } from "@config/router"
import { getRouteNameReviews } from "@config/router/helpers/getterRoutesNames.helper"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { ReviewsSlider } from "../ReviewsSlider/ReviewsSlider"
import styles from "./Reviews.module.scss"

type ReviewsProps = {
	className?: string
}
export const Reviews = TypedMemo((props: ReviewsProps) => {
	const { className } = props

	return (
		<section
			className={classNamesHelp(styles.Reviews, {}, [className])}
			id={getRouteMainReviews().hash}
		>
			<ContainerLayout>
				<VStack
					gap={"gapXL"}
					widthMax={true}
				>
					<Text
						title={getRouteNameReviews()}
						fontSizeTitle={"l"}
						fontWeightTitle={"fat"}
						colorTitle={"main-dark"}
						classNameTitle={styles.title}
					/>
					<ReviewsSlider />
				</VStack>
			</ContainerLayout>
		</section>
	)
})
