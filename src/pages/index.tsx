import logo from "../assets/logo.svg"
import Itens from "../components/Itens"
import Pagination from "../components/Pagination"

import { PeopleContext } from "../context/PeopleContext"
import { useContext } from "react"

function App() {

	const {loading, error} = useContext(PeopleContext)

	return (
		<div className="App">
			<img src={logo} alt="react logo" />
			<h1 className="title">usePagination()</h1>
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>Error fetching data</h2>
			) : (
				<>
					<Pagination />
					<Itens/>
				</>
			)}
		</div>
	)
}

export default App
