import { ReviewerMan, ReviewerWoman } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo, useMemo } from "react"
import Slider from "react-slick"
import styles from "./ReviewsSlider.module.scss"
import { ReviewsItem } from "./ui/ReviewsItem/ReviewsItem"

type ReviewsSliderProps = {
	className?: string
}
export const ReviewsSlider = memo<ReviewsSliderProps>(props => {
	const { className } = props

	const settings = useMemo(() => {
		return {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1,
			lazyload: true,
			arrows: false
		}
	}, [])

	return (
		<Slider
			{...settings}
			className={classNamesHelp(styles.Slider, {}, [className])}
		>
			<ReviewsItem
				title={"Екатерина Вальнова"}
				text={
					"Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."
				}
				imageUrl={ReviewerWoman}
			/>
			<ReviewsItem
				title={"Евгений Стрыкало"}
				text={
					"СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."
				}
				imageUrl={ReviewerMan}
			/>
		</Slider>
	)
})
