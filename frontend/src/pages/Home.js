
import { useEffect, useState }from 'react'

// Components
import MrMomDuties from '../components/MrMomDuties'
import MrMomForm from '../components/MrMomForm'

const Home = () => {
    const [mrMoms, setMrMoms] = useState(null)

    useEffect(() => {
        const fetchMrMoms = async () => {
            const response = await fetch('/api/mrMoms')
            
            // This passes Json and created an array of objects
            const json = await response.json()

            if (response.ok) {
                setMrMoms(json)

            }

        }
        
        fetchMrMoms()
// This fires my useEffect once
// eslint-disable-next-line
}, [])

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