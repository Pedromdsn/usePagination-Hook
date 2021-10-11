import React from "react"
import ReactDOM from "react-dom"
import App from "./pages"

import { Contexts } from "./context"

import "./style/index.css"

ReactDOM.render(
	<React.StrictMode>
		<Contexts>
			<App />
		</Contexts>
	</React.StrictMode>,
	document.getElementById("root")
)
