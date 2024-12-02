import type { Decorator } from "@storybook/react"

export const RestrictionDecorator: Decorator = Story => {
	return (
		<div className={"restriction-container"}>
			<Story />
		</div>
	)
}
