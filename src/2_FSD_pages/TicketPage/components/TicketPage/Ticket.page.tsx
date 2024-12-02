import { useGetDirectionsListItemSelector } from "@entities/Direction"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Text } from "@ui/Text"
import { Header } from "@widgets/Header"
import { useParams } from "react-router"

type TicketPageProps = {
	className?: string
}
const TicketPage = TypedMemo((props: TicketPageProps) => {
	const { className } = props

	const { id } = useParams<{ id: string }>()

	const ticketData = useGetDirectionsListItemSelector(id || "")

	let content = <></>

	if (ticketData) {
		content = (
			<>
				<Text title={ticketData.departure.from.city.name} />
				<Text title={ticketData.departure.to.city.name} />
			</>
		)
	}

	return (
		<div className={classNamesHelp("", {}, [className, "page-style"])}>
			<Header typeBackground={"search"}></Header>
			<div>
				<ContainerLayout>{content}</ContainerLayout>
			</div>
		</div>
	)
})

export default TicketPage
