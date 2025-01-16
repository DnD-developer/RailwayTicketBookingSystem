import App from "@app/App"
import { StoreProvider } from "@providers/StoreProvider"
import { BrowserRouter } from "react-router-dom"

export const RootComponent = () => {
	return (
		<BrowserRouter>
			<StoreProvider>
				<App />
			</StoreProvider>
		</BrowserRouter>
	)
}
