import { Fragment } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="root-wrapper">
        <Header />
        <Home />
      </div>
    </Fragment>
  )
}

export default App
