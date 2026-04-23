import { useState } from "react";

function Adding(){

    const[input, setInput] = useState();
    const[items, setItems] = useState([]);

    const handleChange = (e) =>{
        setInput(e.target.value);
        
    }

    function adding(){
        if(input != ''){
        setItems((prevItem) => [...prevItem, input]);
        setInput('');
        }
    }

    function deleting(){
        setItems([]);
    }


    return(
        <>
        <input type="text" placeholder="Enter the text" value={input} onChange={handleChange}/>
        <button onClick={adding}>add</button>
        <button onClick={deleting}>delete</button>

        <div>
            <ul>
                {items.map((value, key) => (
                    <li key={key}>{value}</li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default Adding;