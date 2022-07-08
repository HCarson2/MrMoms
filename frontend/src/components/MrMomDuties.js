const MrMomDuties = ({mrMom}) => {
    return (
        <div className="mrMom-duties">
            <h4>{mrMom.title}</h4>
            <p><strong>Task: </strong>{mrMom.task}</p>
            <p><strong>Chore: </strong>{mrMom.chore}</p>
            <p>{mrMom.createdAt}</p>
        </div>
    )
}

export default MrMomDuties