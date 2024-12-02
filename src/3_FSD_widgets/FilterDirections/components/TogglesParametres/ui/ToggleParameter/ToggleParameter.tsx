import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Switch } from "@ui/Switch"
import { Text } from "@ui/Text"
import type { FC, SVGProps } from "react"
import styles from "./ToggleParameter.module.scss"

type ToggleParameterProps = {
	className?: string
	Icon: FC<SVGProps<SVGSVGElement>>
	text: string
	isToggle?: boolean
	onToggle?: (value: boolean) => void
}
export const ToggleParameter = TypedMemo((props: ToggleParameterProps) => {
	const { className, isToggle = false, onToggle, Icon, text } = props

	return (
		<HStack
			TagType={"li"}
			className={classNamesHelp("", {}, [className])}
			align={"center"}
			justify={"spaceBetween"}
		>
			<HStack
				align={"center"}
				gap={"gapS"}
				widthMax={false}
			>
				<Icon className={styles.icon} />
				<Text
					text={text}
					fontSizeText={"s"}
					colorText={"main-light"}
				/>
			</HStack>

			<Switch
				enabled={isToggle}
				onChange={onToggle}
			/>
		</HStack>
	)
})
