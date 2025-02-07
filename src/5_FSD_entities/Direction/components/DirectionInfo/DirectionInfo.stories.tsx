import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { directionDataMock } from "../../lib/mocks/directionData.mock"
import { DirectionInfo } from "./DirectionInfo"

const meta: Meta<typeof DirectionInfo> = {
	title: "entities/DirectionInfo",
	component: DirectionInfo,
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"data",
				"isTestLoading"
			]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof DirectionInfo>

export const Default: TypeStory = {
	args: {
		data: directionDataMock()
	}
}

export default meta
