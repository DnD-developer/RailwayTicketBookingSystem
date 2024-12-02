import { getSubscribeRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import { type Meta, type StoryObj } from "@storybook/react"
import { Footer } from "./Footer"

const meta: Meta<typeof Footer> = {
	title: "widgets/Footer",
	component: Footer,
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}${getSubscribeRequestPaths("df@f.ru")}`,
				method: "POST",
				status: 200,
				delay: 1000,
				response: {
					status: true
				}
			}
		]
	},
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof Footer>

export const Default: TypeStory = {
	args: {}
}
