import  { useMrMomsContext } from '../hooks/useMrMomsContext'

//npm install date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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
    const putClick = async () => {
        const response = await fetch('/api/mrMoms/' + mrMom._id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json, text/plain, */*",
            }
    })
    const json = await response.json()
    if (response.ok) {
        dispatch({type: 'PUT_MRMOM', payload: json})

    }
    // console.log(json)


}

    return (
        <div className="mrMom-duties">
            <h4>{mrMom.title}</h4>
            <p><strong>Task: </strong>{mrMom.task}</p>
            <p><strong>Chore: </strong>{mrMom.chore}</p>
            <p>{formatDistanceToNow(new Date(mrMom.createdAt), { addSuffix: true })}</p>

            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            <button className="material-symbols-outlined" onClick={putClick}>edit</button>

        </div>
    )
    }

export default MrMomDuties