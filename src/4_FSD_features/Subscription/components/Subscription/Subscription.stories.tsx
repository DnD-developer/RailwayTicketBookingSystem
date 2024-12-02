import { getSubscribeRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Subscription } from "./Subscription"

const meta: Meta<typeof Subscription> = {
	title: "features/Subscription",
	component: Subscription,
	decorators: [RestrictionDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Subscription>

export const Success: TypeStory = {
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
	args: {}
}

export const Error: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}${getSubscribeRequestPaths("df@f.ru")}`,
				method: "POST",
				status: 200,
				delay: 1000,
				response: {
					status: false
				}
			}
		]
	},
	args: {}
}
