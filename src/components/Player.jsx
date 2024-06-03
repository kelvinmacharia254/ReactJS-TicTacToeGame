import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
     // initial data
    const [isEditing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    let editablePlayerName = <span className='player-name'>{playerName}</span>
    let btnCaption = 'Edit'

    if(isEditing){
        editablePlayerName= <input type="text" required onChange={handleChange}/>
        btnCaption = 'Save'
    }

    function handleEditClick(){
        // setEditing(!isEditing); avoid this direct state update, it causes delay
        setEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}