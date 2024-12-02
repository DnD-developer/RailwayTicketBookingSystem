import { CupeIcon, ExpressIcon, LuxIcon, PlackartIcon, SitPlaceIcon, WifiIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import styles from "./TogglesParametres.module.scss"
import { ToggleParameter } from "./ui/ToggleParameter/ToggleParameter"

type TogglesParametresProps = {
	className?: string
	isToggleCupe?: boolean
	onToggleCupe?: (value: boolean) => void
	isTogglePlackart?: boolean
	onTogglePlackart?: (value: boolean) => void
	isToggleSitPlace?: boolean
	onToggleSitPlace?: (value: boolean) => void
	isToggleLux?: boolean
	onToggleLux?: (value: boolean) => void
	isToggleWifi?: boolean
	onToggleWifi?: (value: boolean) => void
	isToggleExpress?: boolean
	onToggleExpress?: (value: boolean) => void
}
export const TogglesParametres = TypedMemo((props: TogglesParametresProps) => {
	const {
		className,
		isToggleExpress,
		isTogglePlackart,
		onToggleExpress,
		isToggleLux,
		onTogglePlackart,
		isToggleSitPlace,
		isToggleWifi,
		onToggleCupe,
		onToggleLux,
		onToggleSitPlace,
		onToggleWifi,
		isToggleCupe
	} = props

	return (
		<VStack
			TagType={"ul"}
			gap={"gapL"}
			className={classNamesHelp(styles.TogglesParametres, {}, [className])}
		>
			<ToggleParameter
				Icon={CupeIcon}
				text={"Купе"}
				isToggle={isToggleCupe}
				onToggle={onToggleCupe}
			/>
			<ToggleParameter
				Icon={PlackartIcon}
				text={"Плацкарт"}
				isToggle={isTogglePlackart}
				onToggle={onTogglePlackart}
			/>
			<ToggleParameter
				Icon={SitPlaceIcon}
				text={"Сидячий"}
				isToggle={isToggleSitPlace}
				onToggle={onToggleSitPlace}
			/>
			<ToggleParameter
				Icon={LuxIcon}
				text={"Люкс"}
				isToggle={isToggleLux}
				onToggle={onToggleLux}
			/>
			<ToggleParameter
				Icon={WifiIcon}
				text={"WI-FI"}
				isToggle={isToggleWifi}
				onToggle={onToggleWifi}
			/>
			<ToggleParameter
				Icon={ExpressIcon}
				text={"Экспресс"}
				isToggle={isToggleExpress}
				onToggle={onToggleExpress}
			/>
		</VStack>
	)
})
