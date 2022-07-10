import { useState } from "react"
import { useMrMomsContext } from '../hooks/useMrMomsContext'


// Form for 3 input fields
const MrMomForm = () => {
    const { dispatch } = useMrMomsContext()

    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')
    const [chore, setChore] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])


// Submit function
    const handleSubmit = async (e) => {
        // Code prevents the page from refreshing by default
        e.preventDefault()

        const mrMom = {title, task, chore}

        const response = await fetch('/api/mrMoms', {
            method: 'POST',
            body: JSON.stringify(mrMom),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.empty)
        }
        if (response.ok) {
            setTitle('')
            setTask('')
            setChore('')
            setError(null)
            setEmptyFields([])
            console.log('New MrMom added', json)
            dispatch({type: 'CREATE_MRMOM', payload: json})
        }

    }

    return (
        // Create my form / Create onSubmit handler / Each attribute will have a separate line
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add A New Mr. Mom</h3>

            <label>Job Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Task:</label>
            <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className={emptyFields.includes('task') ? 'error' : ''}
            />

            <label>Chore:</label>
            <input
            type="text"
            onChange={(e) => setChore(e.target.value)}
            value={chore}
            className={emptyFields.includes('chore') ? 'error' : ''}
            />

            <button>Add Mr. Mom</button>
            {/* This outputs an error state if there is one */}
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default MrMomForm