import { PagesNames } from "../constants/pagesNames.constant"
import { RoutePaths } from "../constants/routePath.constant"

export type routeInfoType = {
	name: PagesNames
	path: RoutePaths
	inHeader: boolean
}

export const routeConfig: Record<PagesNames, routeInfoType> = {
	[PagesNames.Main]: {
		name: PagesNames.Main,
		path: RoutePaths.Main,
		inHeader: false
	},
	[PagesNames.MainHeader]: {
		name: PagesNames.MainHeader,
		path: RoutePaths.MainHeader,
		inHeader: false
	},
	[PagesNames.MainAboutUs]: {
		name: PagesNames.MainAboutUs,
		path: RoutePaths.MainAboutUs,
		inHeader: true
	},
	[PagesNames.MainHowItWorks]: {
		name: PagesNames.MainHowItWorks,
		path: RoutePaths.MainHowItWorks,
		inHeader: true
	},
	[PagesNames.MainReviews]: {
		name: PagesNames.MainReviews,
		path: RoutePaths.MainReviews,
		inHeader: true
	},
	[PagesNames.MainContacts]: {
		name: PagesNames.MainContacts,
		path: RoutePaths.MainContacts,
		inHeader: true
	},
	[PagesNames.ChooseTrain]: {
		name: PagesNames.ChooseTrain,
		path: RoutePaths.ChooseTrain,
		inHeader: false
	},
	[PagesNames.Ticket]: {
		name: PagesNames.Ticket,
		path: RoutePaths.Ticket,
		inHeader: false
	},
	[PagesNames.Success]: {
		name: PagesNames.Success,
		path: RoutePaths.Success,
		inHeader: false
	},
	[PagesNames.NotFound]: {
		name: PagesNames.NotFound,
		path: RoutePaths.NotFound,
		inHeader: false
	}
}
