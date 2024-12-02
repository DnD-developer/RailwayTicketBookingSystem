import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Switch } from "./Switch"

const meta: Meta<typeof Switch> = {
	title: "shared/Switch",
	component: Switch,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "onChange"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Switch>

export const Default: TypeStory = {
	args: {
		enabled: false
	}
}
