import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { HtmlHTMLAttributes } from "react"
import { ClipLoader } from "react-spinners"

type FadeLoaderProps = {
	size?: number
} & HtmlHTMLAttributes<HTMLDivElement>
export const FadeLoader = TypedMemo((props: FadeLoaderProps) => {
	const { size = 30 } = props

	return (
		<ClipLoader
			size={size}
			color={"#ffa800"}
		/>
	)
})
