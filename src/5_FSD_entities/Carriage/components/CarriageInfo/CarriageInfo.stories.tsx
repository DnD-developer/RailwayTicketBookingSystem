import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { CarriageInfo } from "./CarriageInfo"

const meta: Meta<typeof CarriageInfo> = {
	title: "entities/CarriageInfo",
	component: CarriageInfo,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof CarriageInfo>

export const Default: TypeStory = {
	args: {}
}

export default meta
