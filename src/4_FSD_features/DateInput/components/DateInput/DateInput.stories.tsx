import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { DateInput } from "./DateInput"

const meta: Meta<typeof DateInput> = {
	title: "features/DateInput",
	component: DateInput,
	argTypes: {
		size: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"value",
				"onSaveToForm"
			]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof DateInput>

export const Default: TypeStory = {
	args: {}
}
