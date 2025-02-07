import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { DirectionDetails } from "./DirectionDetails"

const meta: Meta<typeof DirectionDetails> = {
	title: "widgets/DirectionDetails",
	component: DirectionDetails,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof DirectionDetails>

export const Default: TypeStory = {
	args: {}
}

export default meta
