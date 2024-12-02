import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { FilterDirections } from "./FilterDirections"

const meta: Meta<typeof FilterDirections> = {
	title: "widgets/FilterDirections",
	component: FilterDirections,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof FilterDirections>

export const Default: TypeStory = {
	args: {}
}
