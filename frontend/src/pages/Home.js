
import { useEffect, useState }from 'react'

const Home = () => {
    const [mrMoms, setMrMoms] = useState(null)

    useEffect(() => {
        const fetchMrMoms = async () => {
            const response = await fetch('http://localhost:4000/api/mrMoms')
            
            // This passes Json and created an array of objects
            const json = await response.json()

            if (response.ok) {

            }

        }
        
        fetchMrMoms()
// This fires my useEffect once
    }, {})

    return (
        <div className="Home">
            <h2>Home</h2>
        </div>
    )
}

export default Home