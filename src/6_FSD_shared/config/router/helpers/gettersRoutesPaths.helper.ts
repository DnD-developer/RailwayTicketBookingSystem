import { RoutePaths } from "../constants/routePath.constant"

export const getRouteMain = () => {
	return { route: RoutePaths.Main }
}
export const getRouteMainHeader = () => {
	return { route: RoutePaths.MainHeader, hash: RoutePaths.MainHeader.replace(/.*\/#/gm, "") }
}
export const getRouteMainAboutUs = () => {
	return { route: RoutePaths.MainAboutUs, hash: RoutePaths.MainAboutUs.replace(/.*\/#/gm, "") }
}
export const getRouteMainHowItWorks = () => {
	return {
		route: RoutePaths.MainHowItWorks,
		hash: RoutePaths.MainHowItWorks.replace(/.*\/#/gm, "")
	}
}
export const getRouteMainReviews = () => {
	return { route: RoutePaths.MainReviews, hash: RoutePaths.MainReviews.replace(/.*\/#/gm, "") }
}
export const getRouteMainContacts = () => {
	return { route: RoutePaths.MainContacts, hash: RoutePaths.MainContacts.replace(/.*\/#/gm, "") }
}
export const getRouteChooseTrain = () => {
	return { route: RoutePaths.ChooseTrain }
}
export const getRouteSuccess = () => {
	return { route: RoutePaths.Success }
}
export const getRouteTicket = (id: string) => {
	return { route: RoutePaths.Ticket.replace(/:id/, id) }
}
