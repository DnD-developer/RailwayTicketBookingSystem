import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Range } from "./Range"

const meta: Meta<typeof Range> = {
	title: "shared/Range",
	component: Range,
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"range",
				"onChange",
				"typeRange"
			]
		}
	},
	decorators: [RestrictionDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Range>

export const Default: TypeStory = {
	args: {
		typeRange: "default",
		range: [50, 500],
		min: 0,
		max: 1000
	}
}

export const Time: TypeStory = {
	parameters: {
		controls: {
			exclude: [...(meta?.parameters?.controls.exclude ?? undefined), "max", "min"]
		}
	},
	args: {
		typeRange: "time",
		range: [3540, 17200],
		min: 0,
		max: 86400
	}
}
