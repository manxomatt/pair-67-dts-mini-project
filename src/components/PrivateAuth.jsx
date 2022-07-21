import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'

import { auth } from '../configs/firebasecon'

const PrivateAuth = ({ children, loginOnly = true }) => {
    const [user] = useAuthState(auth)
    
    console.log(user)

    if (!user && loginOnly) {
        return <Navigate to="/login"/>
    }

    if (user && !loginOnly) {
        return <Navigate to="/"/>
    }
    
    return children
}

export default PrivateAuth