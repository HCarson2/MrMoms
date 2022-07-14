// Creates context to provide to components in application
import { createContext, useReducer } from 'react'

export const MrMomsContext = createContext()

export const mrMomsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MRMOMS':
            return {
                mrMoms: action.payload
            }
        case 'CREATE_MRMOM':
            return {
                mrMoms: [action.payload, ...state.mrMoms]
            }
        // case 'UPDATE_MRMOM':
        //         return {
        //             mrMoms: state.mrMoms.filter((mrMom) => mrMom._id !== action.payload._id)
        //         }
                   
            case 'DELETE_MRMOM':
                return {
                    mrMoms: state.mrMoms.filter((mrMom) => mrMom._id !== action.payload._id)
                }
        default:
            return state 
            
        
        
                
    }
}
// Provide context to my application tree so that components can access it
export const MrMomsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mrMomsReducer, {
        mrMoms: null
    })

    return (
        // See index.js: This component will wrap the entire component tree giving all components access to the context
        <MrMomsContext.Provider value={{...state, dispatch}}>
            { children } 
        </MrMomsContext.Provider>
    )
}
