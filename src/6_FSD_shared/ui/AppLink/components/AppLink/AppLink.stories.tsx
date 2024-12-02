import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AppLink } from "./AppLink"

const meta: Meta<typeof AppLink> = {
	title: "shared/AppLink",
	component: AppLink,
	argTypes: {
		fontSize: {
			control: "inline-radio"
		},
		fontWeight: {
			control: "inline-radio"
		},
		color: {
			control: "inline-radio"
		},
		colorHover: {
			control: "inline-radio"
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AppLink>

export const Default: TypeStory = {
	args: {
		children: "Link",
		fontSize: "l",
		fontWeight: "medium",
		color: "accent-orange",
		colorHover: "main-light"
	}
}
