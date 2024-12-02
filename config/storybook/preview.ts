import { RouterDecorator } from "@decorators/storybook/Router.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { StyleDecorator } from "@decorators/storybook/Style.decorator"

import type { Preview } from "@storybook/react"

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
		mockAddonConfigs: {
			globalMockData: [],
			ignoreQueryParams: true,
			disableUsingOriginal: false,
			refreshStoryOnUpdate: true,

			disable: true
		},
		backgrounds: {
			values: [
				{ name: "Dark", value: "#292929" },
				{ name: "Light", value: "#e5e5e5" }
			],
			default: "Dark"
		},
		controls: {
			exclude: ["className", "classNames", "children", "data-testid"]
		}
	},
	decorators: [StyleDecorator, RouterDecorator, StoreDecorator({})]
}

export default preview
