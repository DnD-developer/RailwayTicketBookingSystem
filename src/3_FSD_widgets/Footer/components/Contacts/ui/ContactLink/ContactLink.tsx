import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink } from "@ui/AppLink"
import { HStack } from "@ui/Stack"
import type { FC, SVGProps } from "react"
import { memo } from "react"
import styles from "./ContactLink.module.scss"

type ContactLinkProps = {
	Icon: FC<SVGProps<SVGSVGElement>>
	link: string
	linkText: string
	className?: string
}
export const ContactLink = memo<ContactLinkProps>(props => {
	const { className, Icon, link, linkText } = props

	return (
		<HStack
			className={classNamesHelp("", {}, [className])}
			gap={"gapM"}
			align={"center"}
			TagType={"li"}
		>
			<AppLink
				colorHover={"gold"}
				to={link}
				className={styles.linkIcon}
			>
				<Icon className={styles.icon} />
			</AppLink>

			<AppLink
				colorHover={"gold"}
				to={link}
				color={"light-gray"}
				fontSize={"m"}
				fontWeight={"think"}
			>
				{linkText}
			</AppLink>
		</HStack>
	)
})
