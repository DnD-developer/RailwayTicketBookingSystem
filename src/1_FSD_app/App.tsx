import { SEARCH_FORM } from "@constants/localStorage.constant"
import { useDirectionsListSliceUseActions } from "@entities/Direction"
import { useFormForSearchDirectionsActions } from "@features/FillingFormForSearchOfDirections"
import { RouterProvider } from "@providers/RouterProvider"
import { memo, useEffect } from "react"

const App = memo(() => {
	const { directionsListInit } = useDirectionsListSliceUseActions()
	const { setParametres } = useFormForSearchDirectionsActions()

	useEffect(() => {
		const storageForm = localStorage.getItem(SEARCH_FORM)
		if (storageForm) {
			setParametres(JSON.parse(storageForm))
		}

		directionsListInit()
		//eslint-disable-next-line
	}, [])

	return (
		<div className={"app"}>
			<RouterProvider />
		</div>
	)
})

export default App
