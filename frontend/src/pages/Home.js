
import { useEffect }from 'react'
import { useMrMomsContext } from '../hooks/useMrMomsContext'

// Components
import MrMomDuties from '../components/MrMomDuties'
import MrMomForm from '../components/MrMomForm'

const Home = () => {
    const {mrMoms, dispatch} = useMrMomsContext()

    useEffect(() => {
        const fetchMrMoms = async () => {
            const response = await fetch('/api/mrMoms')
            // This passes Json and created an array of objects
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_MRMOMS', payload: json })
            }
        }
        
        fetchMrMoms()
// This fires my useEffect once
}, [dispatch])

    return (
        <div className="home">
            <div className="mrMoms">
                {mrMoms && mrMoms.map((mrMom) => (
                    // Now I have access to the props inside this component
                    <MrMomDuties key={mrMom._id} mrMom={mrMom} />
                ))}

            </div>
            <MrMomForm />
        </div>
    )
}

export default Home