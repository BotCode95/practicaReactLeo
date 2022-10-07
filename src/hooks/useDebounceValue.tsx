import { useState, useEffect } from 'react'

export interface Props {
	input: string
	time?: number
}
export const useDebounceValue = ({ input = '', time = 1000 }: Props) => {
	const [debouncedValue, setDebouncedValue] = useState(input)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(input)
		}, time)

		return () => {
			clearTimeout(timeout)
		}
	}, [input])

	return debouncedValue
}
