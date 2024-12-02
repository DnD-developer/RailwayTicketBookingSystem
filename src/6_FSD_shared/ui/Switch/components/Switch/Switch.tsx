import { Switch as SwitchComponent } from "@headlessui/react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback } from "react"
import styles from "./Switch.module.scss"

type SwitchProps = {
	className?: string
	enabled?: boolean
	onChange?: (value: boolean) => void
}
export const Switch = TypedMemo((props: SwitchProps) => {
	const { className, onChange, enabled } = props

	const onChangeHandler = useCallback(
		(value: boolean) => {
			onChange?.(value)
		},
		[onChange]
	)

	return (
		<SwitchComponent
			checked={enabled}
			onChange={onChangeHandler}
			className={classNamesHelp(
				styles.Switch,
				{ [styles.on]: enabled, [styles.off]: !enabled },
				[className]
			)}
		>
			<span
				aria-hidden="true"
				className={styles.trigger}
			/>
		</SwitchComponent>
	)
})
