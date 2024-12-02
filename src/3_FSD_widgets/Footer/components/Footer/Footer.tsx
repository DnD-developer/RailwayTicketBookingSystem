import { getRouteMainContacts } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { HStack, VStack } from "@ui/Stack"
import { Contacts } from "../Contacts/Contacts"
import { FooterSubscription } from "../FooterSubscription/FooterSubscription"
import { SocialSubscription } from "../SocialSubscription/SocialSubscription"
import { UnderFooter } from "../UnderFooter/UnderFooter"
import styles from "./Footer.module.scss"

type FooterProps = {
	className?: string
}
export const Footer = TypedMemo((props: FooterProps) => {
	const { className } = props

	return (
		<footer
			className={classNamesHelp(styles.Footer, {}, [className])}
			id={getRouteMainContacts().hash}
		>
			<ContainerLayout>
				<HStack
					align={"flexStart"}
					justify={"spaceBetween"}
					className={styles.content}
				>
					<Contacts />
					<VStack
						gap={"gapL"}
						className={styles.footerSubscriptionWrapper}
					>
						<FooterSubscription />
						<SocialSubscription />
					</VStack>
				</HStack>
			</ContainerLayout>

			<UnderFooter />
		</footer>
	)
})
