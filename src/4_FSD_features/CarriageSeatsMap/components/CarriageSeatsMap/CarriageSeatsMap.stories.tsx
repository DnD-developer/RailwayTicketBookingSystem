import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { CarriageSeatsMap } from "./CarriageSeatsMap"

const meta: Meta<typeof CarriageSeatsMap> = {
	title: "features/CarriageSeatsMap",
	component: CarriageSeatsMap,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof CarriageSeatsMap>

export const Default: TypeStory = {
	args: {}
}

export default meta
