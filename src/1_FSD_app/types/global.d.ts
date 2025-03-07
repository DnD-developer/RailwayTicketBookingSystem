// Noinspection JSUnusedGlobalSymbols

declare module "*.module.css" {
	type IClassNames = Record<string, string>
	const classNames: IClassNames
	export = classNames
}

declare module "*module.scss" {
	type IClassNames = Record<string, string>
	const classNames: IClassNames
	export = classNames
}

declare module "*.svg" {
	import type React from "react"
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>
	export default SVG
}
declare module "*.css"
declare module "*.css"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"
declare module "*.gif"
declare module "*.txt"
declare module "*.svg?url"
declare module "*.json"

declare let __IS_DEV__: boolean
declare let __IS_ANALYZE__: boolean
declare let __API_URL__: string
declare let __PROJECT__: "frontend" | "storybook" | "jest"
