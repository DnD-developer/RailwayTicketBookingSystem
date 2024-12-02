import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { FallbackLoader } from "./FallBackLoader"

const meta: Meta<typeof FallbackLoader> = {
	title: "shared/FallbackLoader",
	component: FallbackLoader,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof FallbackLoader>

export const Default: TypeStory = {
	args: {}
}
