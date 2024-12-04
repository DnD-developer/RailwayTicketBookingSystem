import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { directionDataMock } from "../../lib/mocks/directionData.mock"
import { DirectionCard } from "./DirectionCard"

const meta: Meta<typeof DirectionCard> = {
	title: "entities/DirectionCard",
	component: DirectionCard,
	argTypes: {
		typeCard: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "data"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof DirectionCard>

export const Default: TypeStory = {
	args: {
		typeCard: "full",
		data: directionDataMock()
	}
}
