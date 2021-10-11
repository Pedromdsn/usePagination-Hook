import React from "react"
import ReactDOM from "react-dom"
import App from "./pages"

import "./style/index.css"
import { Contexts } from "./context"

ReactDOM.render(
	<React.StrictMode>
		<Contexts>
			<App />
		</Contexts>
	</React.StrictMode>,
	document.getElementById("root")
)
