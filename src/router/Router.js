// ** Router imports
import { useRoutes } from "react-router-dom"

// ** GetRoutes
import { getRoutes } from "./routes"

// ** Hooks Imports
import { useLayout } from "@hooks/useLayout"

//import { useAuthState } from 'react-firebase-hooks/auth'
//import { auth } from '../configs/firebasecon'
import { useAuthState } from '../utility/firebase'

const Router = () => {
  // const { isAuthenticated } = useAuthState()
  // console.log(`AuthenticatedRoute: ${isAuthenticated}`)

  const user =  useAuthState()
        
        console.log(user)

  // ** Hooks
  const { layout } = useLayout()

  const allRoutes = getRoutes(layout)

  const routes = useRoutes([...allRoutes])

  return routes
}

export default Router
