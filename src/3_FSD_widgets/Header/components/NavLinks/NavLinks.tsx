import { routeConfig } from "@config/router"
import { AppLink } from "@ui/AppLink"
import { ContainerLayout } from "@ui/layout"
import { HStack } from "@ui/Stack"
import { memo } from "react"
import styles from "./NavLinks.module.scss"

export const NavLinks = memo(() => {
	return (
		<HStack
			align={"center"}
			widthMax
			className={styles.listLinks}
		>
			<ContainerLayout>
				<HStack
					gap={"gapXL"}
					TagType={"nav"}
				>
					{Object.values(routeConfig).map(link => {
						if (link.inHeader) {
							return (
								<li key={link.path}>
									<AppLink
										key={link.path}
										to={link.path}
										fontSize="l"
										colorHover={"gold"}
										color={"main-light"}
										fontWeight={"think"}
									>
										{link.name}
									</AppLink>
								</li>
							)
						}
					})}
				</HStack>
			</ContainerLayout>
		</HStack>
	)
})
