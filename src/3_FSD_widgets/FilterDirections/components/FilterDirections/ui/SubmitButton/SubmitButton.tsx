import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import styles from "./SubmitButton.module.scss"

type SubmitButtonProps = {
	className?: string
	isDisabled?: boolean
	onSubmit: () => void
}
export const SubmitButton = TypedMemo((props: SubmitButtonProps) => {
	const { className, onSubmit, isDisabled = false } = props

	return (
		<div className={classNamesHelp(styles.SubmitButton, {}, [className])}>
			<Button
				theme={"defaultDark"}
				textUppercase={true}
				height={"m"}
				width={"m"}
				disabled={isDisabled}
				onClick={onSubmit}
			>
				Применить
			</Button>
		</div>
	)
})
