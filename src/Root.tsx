import App from "@app/App"
import { StoreProvider } from "@providers/StoreProvider"
import { HashRouter } from "react-router-dom"

export const RootComponent = () => {
	return (
		<HashRouter>
			<StoreProvider>
				<App />
			</StoreProvider>
		</HashRouter>
	)
}
