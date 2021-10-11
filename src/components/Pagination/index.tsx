import { useContext } from "react"
import { PaginationContext } from "../../contexts/PaginationContext"

const Pagination = () => {

	const {page, totalPages, prevPage, nextPage, setPage} = useContext(PaginationContext)

	return (
		<div className="pagination">
			<p className="text">
				{page}/{totalPages}
			</p>
			<button onClick={prevPage} className={`page ${page === 1 && "disabled"}`}>
				&larr;
			</button>
			{/* @ts-ignore */}
			{[...Array(totalPages).keys()].map((el) => (
				<button onClick={() => setPage(el + 1)} key={el} className={`page ${page === el + 1 ? "active" : ""}`}>
					{el + 1}
				</button>
			))}
			<button onClick={nextPage} className={`page ${page === totalPages && "disabled"}`}>
				&rarr;
			</button>
		</div>
	)
}

export default Pagination
