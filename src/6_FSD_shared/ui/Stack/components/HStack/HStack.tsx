import { memo } from "react"
import type { FlexProps } from "../Flex/Flex"
import { Flex } from "../Flex/Flex"

//To Feature сделать роли ul/menu и тд
type HStackProps = Omit<FlexProps, "direction">
export const HStack = memo<HStackProps>(props => {
	return (
		<Flex
			{...props}
			direction={"row"}
		/>
	)
})
