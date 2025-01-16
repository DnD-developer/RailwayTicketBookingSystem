import { useEffect } from "react"

export const useInitialEffect = (callback: () => void, returnCallback?: () => void) => {
	useEffect(() => {
		callback()

		return () => {
			returnCallback?.()
		}
		//eslint-disable-next-line
	}, [])
}
