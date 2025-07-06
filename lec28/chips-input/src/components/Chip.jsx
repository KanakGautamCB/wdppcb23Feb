import '../styles/chip.css'

function Chip({name,index,deleteChip}) {    
    return(
        <div className="chip-container">
            <span>{name}</span>
            <button onClick={()=>deleteChip(index)} className="delete-button">X</button>
        </div>
    )

}

export default Chip; 