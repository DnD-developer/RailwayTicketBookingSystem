import { lazy } from "react"

const TicketPageLazy = lazy(() => import("./Ticket.page"))

export { TicketPageLazy as TicketPage }
