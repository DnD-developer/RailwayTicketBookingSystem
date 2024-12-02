import preview from "@_storybook/preview"
import { BackgroundMainPageImage } from "@assets/index"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Background } from "./Background"
import styles from "./Background.module.scss"

const meta: Meta<typeof Background> = {
	title: "shared/Background",
	component: Background,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "background"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Background>

export const Default: TypeStory = {
	args: {
		background: BackgroundMainPageImage,
		className: styles.backgroundStory,
		testIsLoading: false
	}
}
