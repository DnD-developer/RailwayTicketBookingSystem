import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { FadeLoader } from "./FadeLoader"

const meta: Meta<typeof FadeLoader> = {
	title: "shared/FadeLoader",
	component: FadeLoader,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof FadeLoader>

export const Default: TypeStory = {
	args: {
		size: 30
	}
}
