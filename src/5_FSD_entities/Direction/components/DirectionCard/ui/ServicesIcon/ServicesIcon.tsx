import { ConditionerIcon, ExpressIcon, WifiIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import styles from "./ServicesIcon.module.scss"

type ServicesIconProps = {
	className?: string
	isWifi?: boolean
	isExpress?: boolean
	isConditioner?: boolean
}
export const ServicesIcon = TypedMemo((props: ServicesIconProps) => {
	const { className, isWifi = false, isConditioner = false, isExpress = false } = props

	return (
		<HStack
			TagType={"ul"}
			gap={"gapXS"}
			justify={"flexEnd"}
			className={classNamesHelp(styles.ServicesIcon, {}, [className])}
		>
			{isWifi && (
				<li>
					<WifiIcon className={styles.icon} />
				</li>
			)}
			{isExpress && (
				<li>
					<ExpressIcon className={styles.icon} />
				</li>
			)}
			{isConditioner && (
				<li>
					<ConditionerIcon className={styles.icon} />
				</li>
			)}
		</HStack>
	)
})
