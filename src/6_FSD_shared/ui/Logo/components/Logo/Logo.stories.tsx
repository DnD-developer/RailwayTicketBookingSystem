import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Logo } from "./Logo"

const meta: Meta<typeof Logo> = {
	title: "shared/HeaderLogo",
	component: Logo,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Logo>

export const Default: TypeStory = {
	args: {}
}
