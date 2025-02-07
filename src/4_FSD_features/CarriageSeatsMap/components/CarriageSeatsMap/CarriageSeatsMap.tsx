import type { testingProps } from "@customTypes/testing.types"
import type { seatDataType } from "@entities/Carriage"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Select } from "@ui/Select"
import { useMemo } from "react"
import styles from "./CarriageSeatsMap.module.scss"

type CarriageSeatsMapProps = {
	className?: string
	currentValue?: string
	onChange?: (value: string) => void
	data?: seatDataType[]
} & testingProps

export const CarriageSeatsMap = TypedMemo((props: CarriageSeatsMapProps) => {
	const { className, currentValue, onChange, data } = props

	const countSeatsData = useMemo(
		() =>
			data?.map(seat => ({
				value: seat.index.toString(),
				content: seat.index.toString()
			})) || [],
		[data]
	)

	return (
		<div className={classNamesHelp(styles.CarriageSeatsMap, undefined, [className])}>
			{countSeatsData?.length && (
				<Select
					label={"Выберите места:"}
					options={countSeatsData}
					theme={"border"}
					onChange={onChange}
					value={currentValue}
				/>
			)}
		</div>
	)
})
