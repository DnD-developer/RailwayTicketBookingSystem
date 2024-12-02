import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ContainerLayout } from "./Container.layout"
import styles from "./ContainerLayout.module.scss"

const meta: Meta<typeof ContainerLayout> = {
	title: "shared/ContainerLayout",
	component: ContainerLayout,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ContainerLayout>

export const Default: TypeStory = {
	args: {
		children: <div className={styles.childrenStories}></div>
	}
}
