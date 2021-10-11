import React from "react"
import ReactDOM from "react-dom"
import App from "./pages"

import { PaginationProvider } from "./context/PaginationContext"
import {PeopleProvider } from "./context/PeopleContext"

import "./style/index.css"

ReactDOM.render(
	<React.StrictMode>
		<PeopleProvider>
			<PaginationProvider>
				<App />
			</PaginationProvider>
		</PeopleProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
