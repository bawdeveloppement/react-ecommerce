import { useContext, useState } from "react"
import { auth } from "../firebase/firebase.utils"
import { AuthContext } from "../pages/authpage/Auth.context"

export const useSession  = () => {
    const { user } = useContext(AuthContext);
}

export const useAuth = () => {
    const [state, setState] = useState(() => { const user = auth.currentUser; return { initializing: !user, user }})
}