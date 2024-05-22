import {useState} from "react";

export default function Player({initialName, symbol}){
    const [isEditing, setEditing] = useState(false);

    // initial data
    let editablePlayerName = <span className='player-name'>{initialName}</span>
    let btnCaption = 'Edit'

    if(isEditing){
        editablePlayerName= <input type="text" required/>
        btnCaption = 'Save'
    }

    function handleEditClick(){
        // setEditing(!isEditing); avoid this direct state update, it causes delay
        setEditing((editing) => !editing);
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}