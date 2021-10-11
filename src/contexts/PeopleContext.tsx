import axios from "axios"
import { createContext, useEffect, useState } from "react"

interface PeopleProviderProps {
	children: JSX.Element
}

interface PeopleContextReturn {
	people: User[]
	loading: boolean
	error: boolean
}

export const PeopleContext = createContext({} as PeopleContextReturn)

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
	const [people, setPeople] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const loadData = async () => {
		try {
			const data = await axios.get("https://random-data-api.com/api/users/random_user?size=20")
			setPeople(data.data)
		} catch {
			setError(true)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		loadData()
	}, [])

	return <PeopleContext.Provider value={{ people, loading, error }}>{children}</PeopleContext.Provider>
}
