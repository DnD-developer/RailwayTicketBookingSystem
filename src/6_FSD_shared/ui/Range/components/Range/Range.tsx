import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { convertSecondsToTime } from "@helpers/convertSecondsToTime/convertSecondsToTime.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback, useEffect, useMemo, useState } from "react"
import { getTrackBackground, Range as RangeComponent } from "react-range"
import type { IRenderThumbParams, IRenderTrackParams } from "react-range/lib/types"
import { HStack, VStack } from "../../../Stack"
import styles from "./Range.module.scss"

type RangeProps = {
	typeRange?: "default" | "time"
	className?: string
	range?: number[]
	min?: number
	max?: number
	onChange?: (value: number[]) => void
}

const STEP = 1
// To Feature сделать сдвиг лейблов, чтобы не налазили друг на друга

export const Range = TypedMemo((props: RangeProps) => {
	const { className, min = 0, max = 10000, range, onChange, typeRange = "default" } = props

	const [values, setValues] = useState(range?.length ? range : [min, max])

	const onFinalChangeHandler = useCallback(
		(range: number[]) => {
			onChange?.(range)
		},
		[onChange]
	)

	useEffect(() => {
		if (range) {
			setValues(range)
		}
	}, [range])

	const Track = useMemo(
		() =>
			({ props, children }: IRenderTrackParams) => {
				return (
					<div
						className={styles.track}
						style={{ ...props.style }}
						onMouseDown={props.onMouseDown}
						onTouchStart={props.onTouchStart}
					>
						<div
							ref={props.ref}
							className={styles.fillTrack}
							style={{
								background: getTrackBackground({
									values,
									colors: ["transparent", "#ffa800", "transparent"],
									min: min,
									max: max
								})
							}}
						>
							{children}
						</div>
					</div>
				)
			},
		[max, min, values]
	)

	const Thumb = useMemo(
		() =>
			({ props, index }: IRenderThumbParams) => {
				return (
					<div
						{...props}
						key={props.key}
						className={styles.thumb}
					>
						<span className={styles.label}>
							{" "}
							{typeRange === "default" ?
								values[index]
							:	convertSecondsToTime(values[index])}
						</span>
					</div>
				)
			},
		[typeRange, values]
	)

	return (
		<VStack
			align={"center"}
			justify={"center"}
			className={classNamesHelp(styles.Range, {}, [className])}
			gap={"gapS"}
		>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
				className={styles.header}
			>
				<span>{"От"}</span>
				<span>{"До"}</span>
			</HStack>
			<RangeComponent
				min={min}
				max={max}
				draggableTrack={true}
				step={STEP}
				onChange={setValues}
				onFinalChange={onFinalChangeHandler}
				renderThumb={Thumb}
				renderTrack={Track}
				values={values}
			/>
		</VStack>
	)
})
