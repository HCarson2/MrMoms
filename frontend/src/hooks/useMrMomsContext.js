import { MrMomsContext } from "../context/MrMomContext"

import { useContext } from "react"

export const useMrMomsContext = () => {
    const context = useContext(MrMomsContext)

   if (!context) {
    throw Error('useMrMomsContext must be used inside MrMomsContextProvider')
   } 

    return context
}