export function whatIsDate(date: Date, currentMonth: number) {
	const currentDate = new Date()

	const isToday =
		date.getDate() === currentDate.getDate() &&
		date.getMonth() === currentDate.getMonth() &&
		date.getFullYear() === currentDate.getFullYear()

	const isWeekend = date.getDay() === 0
	const isLastDateCurrentMonth =
		date.getDate() < currentDate.getDate() &&
		date.getMonth() === currentDate.getMonth() &&
		date.getFullYear() === currentDate.getFullYear()
	const isOtherMonth = date.getMonth() + 1 !== currentMonth
	const isPast = date < currentDate && !isToday

	return { isWeekend, isLastDateCurrentMonth, isOtherMonth, isPast }
}
