import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Flex } from "./Flex"
import styles from "./Flex.module.scss"

const meta: Meta<typeof Flex> = {
	title: "shared/Flex",
	component: Flex,
	argTypes: {
		align: {
			control: "inline-radio"
		},
		justify: {
			control: "inline-radio"
		},
		direction: {
			control: "inline-radio"
		},
		gap: {
			control: "inline-radio"
		},
		TagType: {
			options: [
				"ul",
				"nav",
				"header",
				"footer",
				"section",
				"aside",
				"article",
				"div",
				"li",
				"form"
			],
			control: "select"
		}
	},
	parameters: {
		controls: {
			exclude: ["children", "className"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Flex>

export const Default: TypeStory = {
	args: {
		align: "center",
		justify: "center",
		direction: "row",
		gap: "gapS",
		widthMax: true,
		className: styles.storyContainer,
		children: (
			<>
				<div>Text</div>
				<div>Text</div>
				<div>Text</div>
				<div>Text</div>
				<div>Text</div>
			</>
		)
	}
}
