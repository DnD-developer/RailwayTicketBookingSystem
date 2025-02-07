import type { testingProps } from "@customTypes/testing.types"
import { CarriageInfo, useGetCarriageInfoQuery } from "@entities/Carriage"
import { DirectionInfo } from "@entities/Direction"
import { CarriageChanger } from "@features/CarriageChanger"
import { CarriageSeatsMap } from "@features/CarriageSeatsMap"
import {
	useCurrentDirectionActions,
	useGetCurrentDirectionCarriageInfoSelector,
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionSeatsInfoSelector,
	useGetCurrentDirectionSumSelector
} from "@features/FillingFormCurrentDirection"
import { OverlayLoader } from "@features/OverlayLoader"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback, useEffect, useMemo } from "react"
import styles from "./DirectionDetails.module.scss"

type DirectionDetailsProps = {
	className?: string
} & testingProps

export const DirectionDetails = TypedMemo((props: DirectionDetailsProps) => {
	const { className } = props

	const currentDirection = useGetCurrentDirectionInfoSelector()
	const currentCarriage = useGetCurrentDirectionCarriageInfoSelector()
	const seatsCount = useGetCurrentDirectionSeatsInfoSelector()
	const sum = useGetCurrentDirectionSumSelector()

	const { setCurrentCarriage, setChosenSeatsInfo, calculateSum } = useCurrentDirectionActions()

	const { isLoading, data, error } = useGetCarriageInfoQuery(
		currentDirection?._id,
		useMemo(
			() => ({
				skip: !currentDirection?._id
			}),
			[currentDirection?._id]
		)
	)

	useEffect(() => {
		if (data?.length) {
			setCurrentCarriage(data?.[0].coach)
		}
	}, [data, setCurrentCarriage])

	useEffect(() => {
		calculateSum()
	}, [calculateSum, currentCarriage, seatsCount])

	const onClickHandler = useCallback(
		(id: string) => {
			const newCurrentCarriage = data?.find(car => car?.coach?._id === id)

			if (newCurrentCarriage) {
				setCurrentCarriage(newCurrentCarriage.coach)
			}
		},
		[data, setCurrentCarriage]
	)

	const seats = useMemo(() => {
		if (data?.length && currentCarriage?._id) {
			return data?.filter(car => car?.coach?._id === currentCarriage?._id)?.[0]?.seats
		}
		return []
	}, [currentCarriage?._id, data])

	const onChangeHandler = useCallback(
		(count: string) => {
			const countNumber = parseInt(count)

			if (countNumber) {
				setChosenSeatsInfo(countNumber)
			}
		},
		[setChosenSeatsInfo]
	)

	if (isLoading) {
		return <OverlayLoader />
	}

	return (
		<VStack className={classNamesHelp(styles.DirectionDetails, {}, [className])}>
			<DirectionInfo data={currentDirection} />

			{error ?
				<Text
					widthMax={true}
					title={"Вагон не найден"}
					colorTitle={"error"}
					align={"center"}
					fontSizeTitle={"l"}
					fontWeightTitle={"ultra-fat"}
				/>
			:	<CarriageInfo data={currentCarriage}>
					<CarriageChanger
						data={data}
						activeId={currentCarriage?._id}
						onClick={onClickHandler}
					/>
					<CarriageSeatsMap
						data={seats}
						currentValue={seatsCount.toString()}
						onChange={onChangeHandler}
					/>
					{sum && (
						<HStack
							className={styles.summary}
							align={"flexEnd"}
							justify={"flexEnd"}
							gap={"XS"}
						>
							<Text
								text={sum.toString()}
								fontSizeText={"m"}
								fontWeightText={"ultra-fat"}
								colorText={"accent-orange"}
							/>
							<span className={styles.currency}>₽</span>
						</HStack>
					)}
				</CarriageInfo>
			}
		</VStack>
	)
})

// To hold навести порядок
