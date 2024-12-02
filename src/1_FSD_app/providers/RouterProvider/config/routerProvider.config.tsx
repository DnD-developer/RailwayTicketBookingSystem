import { PagesNames } from "@config/router"
import type { routeInfoType } from "@config/router/config/route.config"
import { routeConfig } from "@config/router/config/route.config"
import { ChooseTrainPage } from "@pages/ChooseTrainPage"
import { MainPage } from "@pages/MainPage"
import { NotFoundPage } from "@pages/NotFoundPage"
import { SuccessPage } from "@pages/SuccessPage"
import { TicketPage } from "@pages/TicketPage"
import type { ReactNode } from "react"
import { type RouteProps } from "react-router"

export type CustomRouteProps = routeInfoType & RouteProps

export const mapperPageNameComponent: Record<PagesNames, ReactNode> = {
	[PagesNames.Main]: <MainPage />,
	[PagesNames.MainHeader]: <MainPage />,
	[PagesNames.MainHowItWorks]: <MainPage />,
	[PagesNames.MainAboutUs]: <MainPage />,
	[PagesNames.MainReviews]: <MainPage />,
	[PagesNames.MainContacts]: <MainPage />,
	[PagesNames.ChooseTrain]: <ChooseTrainPage />,
	[PagesNames.Success]: <SuccessPage />,
	[PagesNames.NotFound]: <NotFoundPage />,
	[PagesNames.Ticket]: <TicketPage />
}

export const routerProviderConfig: CustomRouteProps[] = Object.entries(routeConfig).map(
	([routeName, routeInfo]) => {
		return {
			...routeInfo,
			element: mapperPageNameComponent[routeName as PagesNames]
		}
	}
)
