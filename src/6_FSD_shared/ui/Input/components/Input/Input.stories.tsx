import preview from "@_storybook/preview"
import { LocationIcon } from "@assets/index"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
	title: "shared/Input",
	component: Input,
	argTypes: {
		fontSize: {
			control: "inline-radio"
		},
		fontSizeLabel: {
			control: "inline-radio"
		},
		height: {
			control: "inline-radio"
		},
		fontWeight: {
			control: "inline-radio"
		},
		fontWeightLabel: {
			control: "inline-radio"
		},
		colorLabel: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"onChange",
				"onClick",
				"autoFocus",
				"classNamesLabel",
				"type",
				"Icon"
			]
		}
	},
	decorators: [RestrictionDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Input>

export const Default: TypeStory = {
	parameters: {
		controls: {
			exclude: [
				...(meta?.parameters?.controls.exclude ?? undefined),
				"label",
				"colorLabel",
				"fontSizeLabel",
				"fontWeightLabel"
			]
		}
	},
	args: {
		error: false,
		readOnly: false,
		height: "s",
		fontSize: "m",
		fontWeight: "medium",
		value: "Input Text"
	}
}

export const WithLabel: TypeStory = {
	parameters: {
		controls: {
			exclude: [...(meta?.parameters?.controls.exclude ?? undefined), "Icon"]
		}
	},
	args: {
		error: false,
		readOnly: false,
		height: "s",
		fontSize: "m",
		fontSizeLabel: "s",
		fontWeight: "medium",
		fontWeightLabel: "medium",
		colorLabel: "main-light",
		value: "Input Text",
		label: "Label"
	}
}

export const WithIcon: TypeStory = {
	parameters: {
		controls: {
			exclude: [
				...(meta?.parameters?.controls.exclude ?? undefined),
				"label",
				"colorLabel",
				"fontSizeLabel",
				"fontWeightLabel"
			]
		}
	},
	args: {
		error: false,
		readOnly: false,
		height: "s",
		fontSize: "m",
		fontWeight: "medium",
		value: "Input Text",
		Icon: LocationIcon
	}
}
