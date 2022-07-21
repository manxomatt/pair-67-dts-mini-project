// ** React Imports
import { Link } from "react-router-dom"

// ** Custom Components
import Avatar from "@components/avatar"

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power
} from "react-feather"
import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from "../../../../configs/firebasecon"
import { signOut } from "firebase/auth"
// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap"

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg"

const UserDropdown = () => {
  const logout = () => {
    signOut(auth)
    navigate('/')
}

  const [user] = useAuthState(auth) //, loading, err
  // console.log(user)
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      { user ? <><DropdownToggle
          href="/"
          tag="a"
          className="nav-link dropdown-user-link"
          onClick={(e) => e.preventDefault()}
        >
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name fw-bold">{user.email.split("@")[0]}</span>
            <span className="user-status">{user.email}</span>
          </div>
          <Avatar
            img={defaultAvatar}
            imgHeight="40"
            imgWidth="40"
            status="online" />
        </DropdownToggle><DropdownMenu end>
            <DropdownItem tag={Link} onClick={logout} to="/">
              <Power size={14} className="me-75" />
              <span className="align-middle">Logout</span>
            </DropdownItem>
          </DropdownMenu></> : <a className='me-1 mb-1 btn btn-secondary'
                color='secondary' href="/login">Login</a>
}
    </UncontrolledDropdown>
  )
}

export default UserDropdown
