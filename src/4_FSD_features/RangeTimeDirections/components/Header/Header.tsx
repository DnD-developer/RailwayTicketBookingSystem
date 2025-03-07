import { ArrowFromIcon, ArrowToIcon, MinusButtonIcon, PlusButtonIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback } from "react"
import styles from "./Header.module.scss"

type HeaderProps = {
	onClick?: () => void
	direction?: "toTrip" | "fromTrip"
	isOpen: boolean
	className?: string
}
export const Header = TypedMemo((props: HeaderProps) => {
	const { className, onClick, direction, isOpen = false } = props

	const onClickHandler = useCallback(() => {
		onClick?.()
	}, [onClick])

	return (
		<HStack
			className={classNamesHelp(styles.Header, { [styles.headerClose]: !isOpen }, [
				className
			])}
			align={"center"}
			justify={"spaceBetween"}
		>
			<HStack
				gap={"S"}
				align={"center"}
			>
				{direction === "toTrip" ?
					<ArrowToIcon className={styles.arrow} />
				:	<ArrowFromIcon className={styles.arrow} />}
				<Text
					title={direction === "toTrip" ? "Туда" : "Обратно"}
					fontSizeTitle={"l"}
					fontWeightTitle={"ultra-fat"}
					colorTitle={"main-light"}
				/>
			</HStack>
			<Button
				onClick={onClickHandler}
				theme={"clear"}
			>
				{isOpen ?
					<MinusButtonIcon className={styles.buttonIcon} />
				:	<PlusButtonIcon className={styles.buttonIcon} />}
			</Button>
		</HStack>
	)
})
