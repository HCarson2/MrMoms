// Creates context to provide to components in application
import { createContext } from 'react'


export const MrMomsContext = createContext()

// Provide context to my application tree so that components can access it
const mrMomsContextProvider = () => {

    return (
        <mrMomsContext.Provider>

        </mrMomsContext.Provider>

    )
}