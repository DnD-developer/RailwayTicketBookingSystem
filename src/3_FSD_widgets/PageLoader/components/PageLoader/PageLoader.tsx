import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { FallbackLoader } from "@ui/FallbackLoader/components/FallBackLoader/FallBackLoader"
import { Overlay } from "@ui/Overlay"
import { HStack } from "@ui/Stack"
import styles from "./PageLoader.module.scss"

type PageLoaderProps = {
	className?: string
}
export const PageLoader = TypedMemo((props: PageLoaderProps) => {
	const { className } = props

	return (
		<HStack className={classNamesHelp(styles.PageLoader, {}, [className])}>
			<Overlay />
			<FallbackLoader />
		</HStack>
	)
})
