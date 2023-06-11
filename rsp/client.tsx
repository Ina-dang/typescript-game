import * as React from "react"
import { createRoot } from "react-dom/client"
import RSP from "./RSP"

const container = document.getElementById("root")
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(<RSP />)
