import axios from 'axios'
import { useEffect, useState } from 'react'
import { Personajes, Result } from '../../interfaces/personajesInterface'

export const ListadoPersonajes = () => {
	const [personajes, setPersonajes] = useState<Result[]>([])

	useEffect(() => {
		consultarPersonajes()
	}, [personajes])

	const consultarPersonajes = async () => {
		const respuesta = await axios.get(
			'https://rickandmortyapi.com/api/character'
		)
		setPersonajes(respuesta.data.results)
	}

	return (
		<div className="row justify-content-center">
			{personajes.map((personaje) => (
				<div
					className="col-5 mt-2"
					key={personaje.id}
					style={{ backgroundColor: 'cyan', padding: 2, marginRight: 2 }}
				>
					<h1>{personaje.name}</h1>
					<p>{personaje.gender}</p>
					<p>{personaje.status}</p>
					<img src={personaje.image} alt="" />
				</div>
			))}
		</div>
	)
}
