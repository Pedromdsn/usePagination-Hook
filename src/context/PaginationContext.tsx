import usePagination, { UsePaginationReturn } from "../hooks/usePagination"

import { createContext, useContext } from "react"
import { PeopleContext } from "./PeopleContext"

export const PaginationContext = createContext({} as UsePaginationReturn)

export const PaginationProvider = ({ children }: any) => {
	const { people } = useContext(PeopleContext)

	const pagination = usePagination({
		contentPerPage: 3,
		totalCount: people.length,
	})

	return <PaginationContext.Provider value={{ ...pagination }}>{children}</PaginationContext.Provider>
}
