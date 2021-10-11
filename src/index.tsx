import React from "react"
import ReactDOM from "react-dom"
import App from "./pages"

import { GlobalContexts } from "./contexts"

import "./style/index.css"

ReactDOM.render(
	<React.StrictMode>
		<GlobalContexts>
			<App />
		</GlobalContexts>
	</React.StrictMode>,
	document.getElementById("root")
)
