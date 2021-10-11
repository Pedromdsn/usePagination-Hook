import { PaginationProvider } from "./PaginationContext"
import { PeopleProvider } from "./PeopleContext"

export const GlobalContexts = ({ children }: any) => {
	return (
		<PeopleProvider>
			<PaginationProvider>{children}</PaginationProvider>
		</PeopleProvider>
	)
}
