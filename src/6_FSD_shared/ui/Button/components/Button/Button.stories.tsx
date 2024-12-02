import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
	title: "shared/Button",
	component: Button,
	argTypes: {
		theme: {
			control: "inline-radio"
		},
		width: {
			control: "inline-radio"
		},
		height: {
			control: "inline-radio"
		},
		color: {
			control: "inline-radio"
		},
		fontWeight: {
			control: "inline-radio"
		},
		fontSize: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "onClick"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Button>

export const Default: TypeStory = {
	args: {
		children: "Button",
		theme: "defaultDark",
		fontSize: "m",
		fontWeight: "fat",
		width: "m",
		height: "m",
		color: "main-dark",
		textUppercase: true,
		disabled: false
	}
}
