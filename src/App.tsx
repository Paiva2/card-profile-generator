import { Fragment } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import GlobalStorage from "./context/globalContext/GlobalStorage"

function App() {
  return (
    <GlobalStorage>
      <Fragment>
        <GlobalStyle />
        <div className="root-wrapper">
          <Header />
          <Home />
        </div>
      </Fragment>
    </GlobalStorage>
  )
}

export default App
