export const convertSecondsToHour = (value: number) => {
	const hour = Math.trunc(value / (60 * 60))

	return hour
}
