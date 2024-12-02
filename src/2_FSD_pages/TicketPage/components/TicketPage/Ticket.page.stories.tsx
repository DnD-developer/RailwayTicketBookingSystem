import preview from "@_storybook/preview"
import { type Meta, type StoryObj } from "@storybook/react"
import { TicketPage } from "./TicketPage.lazy"

const meta: Meta<typeof TicketPage> = {
	title: "pages/TicketPage",
	component: TicketPage,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof TicketPage>

export const Default: TypeStory = {
	args: {}
}
