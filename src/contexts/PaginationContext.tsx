import usePagination, { UsePaginationReturn } from "../hooks/usePagination"

import { createContext, useContext } from "react"
import { PeopleContext } from "./PeopleContext"

interface PaginationProviderProps {
	children: JSX.Element
}

export const PaginationContext = createContext({} as UsePaginationReturn)

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
	const { people } = useContext(PeopleContext)

	const pagination = usePagination({
		contentPerPage: 3,
		totalCount: people.length,
	})

	return <PaginationContext.Provider value={{ ...pagination }}>{children}</PaginationContext.Provider>
}
