import Item from "./Item"

import { PeopleContext } from "../../contexts/PeopleContext"
import { useContext } from "react"
import { PaginationContext } from "../../contexts/PaginationContext"

const Itens = () => {
	const { firstContentIndex, lastContentIndex } = useContext(PaginationContext)
	const { people } = useContext(PeopleContext)
	return (
		<div className="items">
			{people.slice(firstContentIndex, lastContentIndex).map((e) => (
				<Item element={e}/>
			))}
		</div>
	)
}

export default Itens
