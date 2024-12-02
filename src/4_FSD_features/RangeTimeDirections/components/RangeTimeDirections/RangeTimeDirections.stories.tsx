import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { RangeTimeDirections } from "./RangeTimeDirections"
import styles from "./RangeTimeDirections.module.scss"

const meta: Meta<typeof RangeTimeDirections> = {
	title: "features/RangeTimeDirections",
	component: RangeTimeDirections,
	argTypes: {
		direction: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"onChangeArrivalRange",
				"onChangeDepartureRange",
				"arrivalRange",
				"departureRange"
			]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof RangeTimeDirections>

export const Default: TypeStory = {
	args: {
		className: styles.storiesContainer,
		direction: "arrival"
	}
}
