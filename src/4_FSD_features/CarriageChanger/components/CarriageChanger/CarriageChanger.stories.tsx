import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { CarriageChanger } from "./CarriageChanger"

const meta: Meta<typeof CarriageChanger> = {
	title: "feature/CarriageChanger",
	component: CarriageChanger,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof CarriageChanger>

export const Default: TypeStory = {
	args: {}
}

export default meta
