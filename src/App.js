import React, { Suspense } from "react"
import PrivateAuth from "./components/PrivateAuth"

// ** Router Import
import Router from "./router/Router"
import { UserAuthContextProvider } from "./utility/UserAuthContext"

const App = () => {
  return (
    <Suspense fallback={null}>
      <UserAuthContextProvider>
        <Router />
      </UserAuthContextProvider>
    </Suspense>
  )
}

export default App
