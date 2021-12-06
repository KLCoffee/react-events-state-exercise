import {useState} from 'react';

function Bonus (){

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [index, setIndex] = useState (0);

    return (
        <div>
            <h1>{letters[index]}</h1>
            <button onClick={() => setIndex (index +1)}>Next Letter</button>
        </div>
    );
}

export default Bonus;