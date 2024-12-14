import { useContext } from "react"
import Authcontex from "../Contex/AuthContext"


const useAuth = () =>{
    const context = useContext(Authcontex)
    return context
}

export default useAuth