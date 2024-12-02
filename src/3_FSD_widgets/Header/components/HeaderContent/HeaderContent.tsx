import type { PropsWithChildren } from "react"
import { memo } from "react"
import styles from "./HeaderContent.module.scss"
import { VStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"

export const HeaderContent = memo<PropsWithChildren>(props => {
	const { children } = props

	return (
		<VStack
			className={styles.content}
			justify={"flexEnd"}
			widthMax={true}
		>
			<ContainerLayout>{children}</ContainerLayout>
		</VStack>
	)
})
