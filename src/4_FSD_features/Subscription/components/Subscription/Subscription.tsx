import { TypedMemo } from "@sharedProviders/TypedMemo"
import { FallbackLoader } from "@ui/FallbackLoader"
import { Modal } from "@ui/Modal"
import { Text } from "@ui/Text"
import type { ReactNode } from "react"
import { useCallback, useEffect, useState } from "react"
import { useToSubscribeMutation } from "../../api/toSubscribeRtkq"
import { SubscriptionForm } from "../SubscriptionForm/SubscriptionForm"

type SubscriptionProps = {
	className?: string
}
export const Subscription = TypedMemo((props: SubscriptionProps) => {
	const { className } = props

	const [toSubscribe, response] = useToSubscribeMutation()

	const [modalIsOpen, setModalIsOpen] = useState(false)

	let content: ReactNode = <FallbackLoader />

	if (response.isError || (response.data && !response.data.status)) {
		content = (
			<Text
				title={"Не удалось подписаться"}
				colorTitle={"main-dark"}
			/>
		)
	}

	if (response.data?.status) {
		content = (
			<Text
				title={"Вы успешно подписаны"}
				colorTitle={"main-dark"}
			/>
		)
	}

	useEffect(() => {
		if (response.isLoading) {
			setModalIsOpen(true)
		}
	}, [response.isLoading])

	const onSendHandler = useCallback(
		(email: string) => {
			toSubscribe(email)
		},
		[toSubscribe]
	)

	const onCloseModalHandler = useCallback(() => {
		setModalIsOpen(false)
	}, [])

	return (
		<>
			<SubscriptionForm
				onSend={onSendHandler}
				className={className}
			/>
			{modalIsOpen && (
				<Modal
					lazy
					isOpen={modalIsOpen}
					onClose={onCloseModalHandler}
				>
					{content}
				</Modal>
			)}
		</>
	)
})
