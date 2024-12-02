import preview from "@_storybook/preview"
import { getCitiesRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SearchDirections } from "./SearchDirections"

const meta: Meta<typeof SearchDirections> = {
	title: "widgets/SearchDirections",
	component: SearchDirections,
	argTypes: {
		view: {
			control: "inline-radio"
		}
	},
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}${getCitiesRequestPaths("Мос")}`,
				method: "GET",
				status: 200,
				delay: 1000,
				response: [
					{
						_id: "66ac8b69cb563f0052174f45",
						name: "москва"
					},
					{
						_id: "66ac8b69cb563f0052174f46",
						name: "московия"
					}
				]
			}
		],
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "onSearch"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof SearchDirections>

export const Default: TypeStory = {
	args: {}
}
