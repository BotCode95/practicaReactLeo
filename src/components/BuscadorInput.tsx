import { useState, useEffect } from 'react'
import { useDebounceValue } from '../hooks/useDebounceValue'

export const BuscadorInput = () => {
	const [textValue, setTextValue] = useState<string>('')
	const debouncedValue = useDebounceValue({ input: textValue })

	useEffect(() => {
		//context fn filter with parameter debouncedValue
	}, [debouncedValue])

	return (
		<div className="col-10 d-flex justify-content-center">
			<input
				type="text"
				className="form-control"
				placeholder="Buscador"
				name="textValue"
				value={textValue}
				onChange={(e) => setTextValue(e.target.value)}
			/>
		</div>
	)
}
