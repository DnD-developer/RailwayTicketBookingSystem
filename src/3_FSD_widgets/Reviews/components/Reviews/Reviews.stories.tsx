import { type Meta, type StoryObj } from "@storybook/react"
import { Reviews } from "./Reviews"

const meta: Meta<typeof Reviews> = {
	title: "widgets/Reviews",
	component: Reviews,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof Reviews>

export const Default: TypeStory = {
	args: {}
}
