import { PaginationProvider } from "./contexts/PaginationContext"
import { PeopleProvider } from "./contexts/PeopleContext"

export const Contexts = ({ children }: any) => {
	return (
		<PeopleProvider>
			<PaginationProvider>{children}</PaginationProvider>
		</PeopleProvider>
	)
}
