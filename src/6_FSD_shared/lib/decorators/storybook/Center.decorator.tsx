import type { Decorator } from "@storybook/react"

export const CenterDecorator: Decorator = Story => {
	return (
		<div className={"center-container"}>
			<Story />
		</div>
	)
}
