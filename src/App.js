import React, { Suspense } from "react"
import PrivateAuth from "./components/PrivateAuth"

// ** Router Import
import Router from "./router/Router"

const App = () => {
  return (
    <Suspense fallback={null}>
      {/* <PrivateAuth > */}
        <Router />
      {/* </PrivateAuth> */}
    </Suspense>
  )
}

export default App
