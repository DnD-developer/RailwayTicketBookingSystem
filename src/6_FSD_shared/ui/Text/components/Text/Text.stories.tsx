import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Text } from "./Text"

const meta: Meta<typeof Text> = {
	title: "shared/Text",
	component: Text,
	argTypes: {
		align: {
			control: "inline-radio"
		},
		fontSizeTitle: {
			control: "inline-radio"
		},
		fontWeightTitle: {
			control: "inline-radio"
		},
		colorTitle: {
			control: "inline-radio"
		},
		TitleType: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"classNamesText",
				"classNameTitle"
			]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Text>

export const Default: TypeStory = {
	args: {
		title: "Title",
		align: "left",
		fontSizeTitle: "l",
		fontWeightTitle: "fat",
		TitleType: "h2",
		colorTitle: "main-gray"
	},
	parameters: {
		controls: {
			exclude: [
				...(meta?.parameters?.controls?.exclude ?? undefined),
				"fontSizeText",
				"fontWeightText",
				"colorText",
				"text"
			]
		}
	}
}

export const WithText: TypeStory = {
	argTypes: {
		fontSizeText: {
			options: ["xs", "s", "m", "l", "xl"],
			control: "inline-radio"
		},
		fontWeightText: {
			options: ["think", "medium", "fat", "ultra-fat"],
			control: "inline-radio"
		},
		colorText: {
			options: [
				"accent-orange",
				"main-dark",
				"main-light",
				"main-gray",
				"gold",
				"light-gray"
			],
			control: "inline-radio"
		}
	},
	args: {
		title: "Title",
		align: "left",
		fontSizeTitle: "l",
		fontWeightTitle: "fat",
		TitleType: "h2",
		colorTitle: "main-gray",
		text: "text text text text text text text",
		fontSizeText: "m",
		fontWeightText: "medium",
		colorText: "main-gray"
	}
}
