import preview from "@_storybook/preview"
import { type Meta, type StoryObj } from "@storybook/react"
import { DirectionsList } from "./DirectionsList"

const meta: Meta<typeof DirectionsList> = {
	title: "widgets/DirectionsList",
	component: DirectionsList,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof DirectionsList>

export const Default: TypeStory = {
	args: {}
}
