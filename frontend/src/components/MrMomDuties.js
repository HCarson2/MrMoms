import  { useMrMomsContext } from '../hooks/useMrMomsContext'
const MrMomDuties = ({mrMom}) => {
    const { dispatch } = useMrMomsContext()

    const handleClick = async () => {
        const response = await fetch('/api/mrMoms/' + mrMom._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_MRMOM', payload: json})

        }

    }
    return (
        <div className="mrMom-duties">
            <h4>{mrMom.title}</h4>
            <p><strong>Task: </strong>{mrMom.task}</p>
            <p><strong>Chore: </strong>{mrMom.chore}</p>
            <p>{mrMom.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default MrMomDuties